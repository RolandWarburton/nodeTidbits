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

Build your gateway container

```output
docker build -t gateway .
```

Start your backend services. Use your own services or the provided scripts

```output
cd webServers
docker-compose up
```

Then start your gateway, start without -d for now to investigate any issues, 50x, 40x errors etc.

```output
docker-compose up
```

good luck, have fun.
