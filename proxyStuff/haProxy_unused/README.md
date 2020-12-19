# HA Proxy

I abandoned HA in favor for nginx, here are the unused bits.

### Create a route robin for all servers

```none
defaults
    mode http

frontend http80
    bind 0.0.0.0:80
    timeout client 60s
    mode http
    default_backend allservers

backend allservers
    timeout connect 10s
    timeout server 100s
    mode http
    server server3000 127.0.0.1:3001
    server server3001 127.0.0.1:3002
```

### Separate each server into its own distinct group of server/s

urls ending in `/app1` are directed to `app1Servers` backend and round robin those servers only.

```none
defaults
    mode http

frontend http80
    bind 0.0.0.0:80
    timeout client 60s

    acl app1 path_end -i /app1
    acl app2 path_end -i /app2

    use_backend app1Servers if app1
    use_backend app2Servers if app2

    default_backend allservers

backend app1Servers
    timeout connect 10s
    timeout server 100s
    server server3001 127.0.0.1:3001

backend app2Servers
    timeout connect 10s
    timeout server 100s
    server server3002 127.0.0.1:3002

backend allservers
    timeout connect 10s
    timeout server 100s
    server server3000 127.0.0.1:3001
    server server3001 127.0.0.1:3002
```

### Prevent round robin behavior

If you have a stateful application (for example when running some type of cookie session based authentication), you require the same IP to bind to
the same server, this can be done by modifying the backend for a particular server with `balance source`, for example.

```none
backend app1Servers
    timeout connect 10s
    timeout server 100s
	balance source
    server server3001 127.0.0.1:3001
```
