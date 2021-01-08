# nginx-auth-docker

Example of using auth_request in nginx to provide a custom authenticator. The docker containers are coordinated using docker-compose. Bootstrapped from [roylines/nginx-auth-docker](https://github.com/roylines/nginx-auth-docker).

Additions to the project to suite my future projects.

* Better code documentation
* More fleshed out code flow
* Implementation of RFC 7519 JWTs

## TODO

- [ ] Implement database on version 2
- [x] Test cookie interactions when crossing domains: Works on subdomains at least which is what i want (see [dd8ffb9](https://github.com/RolandWarburton/nodeTidbits/commit/dd8ffb9bd09e53905452eff2647ef70fb2caf338))
- [ ] Implement session time based management of cookies on auth backend
- [ ] Investigate if cookies delete themselves after expiring or if i need to manage it

## bring up the stack

```none
docker-compose build && docker-compose up
```

## How it works

Nginx contains the ability to perform subrequests for authentication, known as an `auth_request`.
Using this ability to place subrequests infront of requests, it is possible to protect an inherently unprotected upstream service using a single-sign-on style server.

Instead of using the openid code flow implementation where a client makes a request to an auth server for permission to open a session, and then the client never really communicates with the auth server until antoher user needs to authenticate.

This new way of doing things moves the stage where authentication is performed to the webserver gateway (nginx) instead of the sso upstream server through an auth\_request subrequest. This should make things a bit easier to manage at the cost of overhead as the auth server needs to be hit on every request to check and track the session cookie. However this pattern allows for HA and redundant authentication servers to poll a single database (not included in this example) which allows for some scaling.

The code flow follows this process roughly:

* Upstream /ms1 -> ms1:8080
* Upstream /auth -> auth\_server:8080

1. Browser goes to a restricted resouce on /ms1 (microservice 1)
2. Nginx routes this request to /auth and the auth server checks/authenticates for a cookie set
3. If the cookie doesnt exist an unauthenticated 401 is returned and nginx catches this
4. Nginx routes 401 requests to /auth/promptlogin and collects users details
5. /auth/promptlogin contains a POST route that processes the login and on successful login sets returns 200, and a cookie in the browser for future authentication
6. Then the browser is redirected back to the /ms1 and now that the browser contains a cookie, future requests against /auth will be authenticated right away and 200 will be sent back allowing the user to pass to /ms1 without logging in again

## Why i created this

I had a problem where i wanted to use the same login across different applications, however my old implementation (link below) didnt allow for this. To fix this i was motivated to learn about learning about microservices, and created this project as a proof of concept. I have written a similar authentication service [here](https://github.com/RolandWarburton/simple-sso) and i will compare the two below, mostly so i can easily remember which one i should use for what projects in the future.

**old system:**
pros:

* super fast
* low resource
* very secure (but not really because i implemented it)

cons:

* limited cross-application authentication...
IE. framework doesnt allow a user to move between applications on the same domain

**new system:*
pros:

* should maybe fix the cons of the old system
* possibly easier to understand (not using any fancy code flow or techniques)

cons:

* single source of failure (unless i do redundant balancing)
* i need to waste my time redoing authentication AGAIN
