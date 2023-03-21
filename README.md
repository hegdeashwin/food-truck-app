# Food Truck as a Service

List of APIs for Food Truck functionalities and UI to consume those APIs.

## Prerequisite

Sets of packages/tools require to run the service

| Tools | Purpose |
|:---|:---|
| [Node.js 18.x](https://www.nodejs.org) | Used for `./server_node`. Executed and tested on Node.js v v16.17.0 or above. Visit [Readme.md](./server_node/READ.md) for more details |
| [Python 3.8](https://www.python.org/downloads/) | Used for `./server_py`. Executed and tested on Python 3.8.10. Visit [Readme.md](./server_py/READ.md) for more details  |
| [Docker](https://www.docker.com/) | Used to run `MongoDB` and `MongoDB-Express` on `Docker` using `Docker Compose`. |

## Setup

### Run the service

1. Use below command to setup `Mongdb database` and `Mongodb Express` using Docker Compose.

```console
docker-compose up
```

Open `http://localhost:8081/` and create database with name `ftaas_db` and collection with name `food_trucks`.

2. Use below command to setup `./client` and run on local.

```console
cd client
npm i
npm run dev
```

3. Use below command to setup `./server_node` and run on local.

```console
cd server_node
npm i
npm run start
```

> To run the app successfully, `./client` and `./server_node` is enough. `./server_py` is not required. Its just an additional alternative which I wrote as experiment.

4. Use below command to setup 

```console
cd server_py
pip install -r requirements.txt
pip install -r requirements-dev.txt
export API_SYS_INS_TYPE="DEVELOPMENT"
uvicorn "app.main:app" --host="0.0.0.0" --port=8000 --reload
```
