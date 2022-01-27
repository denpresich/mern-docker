# MERN Docker

Sample of the MERN stack application build for development and production purposes.

## Description

Simple Todo application build using the MERN stack which shows how to configure the Docker for development and production environments on any machine.

### Tools used

- `Webpack` – Module bundler for the FE React application
- `Nginx` – Web server (used also as a reversed proxy for applications)
- `Docker` – OS-level virtualization
- `React` – JS library to build UI
- `Express` – Node.js web application framework
- `MongoDB` – NoSQL database
- `mongo-express` – web-based MongoDB admin interfaces

## How to run an application

If you want to run an application you'd need to install [Docker](https://docs.docker.com/get-docker/)

After an installation is complete, please, create and defined `ENVIRONMENTAL VARIABLES` in the `.env` file. The example with all required variables you can find in the root folder in file named `.env.example`. Also, you can just rename the `.env.example` to `.env` and continue to the next step.

To run/stop an application in the development mode use

```
docker-compose up
```

```
docker-compose down
```

> In the development mode the Docker mounts the source folder to the virtual disk and webpack/nodemon listens to the file changes.

To run/stop an application in the production mode use

```
docker-compose -f docker-compose.prod.yaml up
```

```
docker-compose -f docker-compose.prod.yaml down
```

After the all services are started go to the [localhost:443](http://localhost:443) and check how it works.
