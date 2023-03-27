# Server (Node)

RESTful service to export the functionalities wrt Food Truck As A Service API.

## Prerequisite

Sets of packages/tools require to run the service directly without isolation

* [Node.js 16.x or Above](https://nodejs.org/en/download)
* [Python 3.8](https://www.python.org/downloads/)

Sets of packages/tools require to run the service on Docker isolation

* [Docker](https://www.docker.com/)

## Setup

### Development

```console
export NODE_ENV="development"
```

**Install all dependencies using npm**

```console
npm install
```

**Run the service**

```console
npm run dev
```

**Build & start the service using Docker**

```console
docker build -f Dockerfile.dev -t food_truck_node_serv .
docker run -d -p 8005:8005 food_truck_node_serv
```

**Open the service**

1. Postman / Thunderclient

**Run the formatter**

Run black & isort before committing the changes

```console
npm run pretty
```

### Stage

```console
export NODE_ENV="staging"
```

### Production

```console
export NODE_ENV="production"
```

**Build and start the service**

```console
npm run build
npm run start
```

**Build & start the service using Docker**

```console
docker build -f Dockerfile -t food_truck_node_serv .
docker run -d -p 8005:8005 food_truck_node_serv
```

**Run the service**

```console
http://<PRODUCTION_PROXY_IP>:8005/api/v1/<ENDPOINT_PATH>
```
