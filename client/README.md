# Client

Web client/frontend app to consume the Food Truck As a Service API. Built on top of Next.js React+TypeScript framework.

## Prerequisite

Sets of packages/tools require to run the app directly without isolation

* [Node.js 16.x or Above](https://nodejs.org/en/download)
* [Python 3.8](https://www.python.org/downloads/)

Sets of packages/tools require to run the app on Docker isolation

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

**Run the app**

```console
npm run dev
```

**Build & start the app using Docker**

```console
docker build -f Dockerfile.dev -t food_truck_ui .
docker run -d -p 3000:3000 food_truck_ui
```

**Run the app**

```console
Google Chrome > http://localhost:3000
```

**Run the formatter**

Run pretty before committing the changes

```console
npm run lint
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

**Build & start the app**

```console
npm run build
npm run start
```

**Build & Start the app using Docker**

```console
docker build -f Dockerfile -t food_truck_ui .
docker run -d -p 3000:3000 food_truck_ui
```

**Run the app**

```console
http://<PRODUCTION_PROXY_IP>:3000
```

**Run health check on app**

```console
http://<PRODUCTION_PROXY_IP>:3000/api/health
```
