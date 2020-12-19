# Nginx Docker Gateway

An nginx docker pattern example.

## Acquire certs

The first step is to install certbot onto your server and acquire a certificate for your domain.
Make sure to use the `--standalone` flag to avoid modification of any existing configs.

```none
sudo certbot certonly --standalone
```

Then enter your domain name and locate the certificate files. **DO NOT move them**.

![generated keys](https://i.imgur.com/ekiUqvI.png)

## Running

Create your external docker network to allow container to access each other across different docker-compose files.

```output
docker network create gateway_network
```

Start your backend services. Use your own services or the provided template servers in `/webServers`.
Start your gateway without `-d` for now to investigate any issues, 50x, 40x errors etc.

Build your web service backends.

```output
cd webServers
docker build -t express .
docker-compose up
```

Build your gateway container.

```output
cd nginxGateway
docker build -t gateway .
docker-compose up
```

good luck, have fun.
