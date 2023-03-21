# Food Truck as a Service

List of APIs for Food Truck functionalities and UI to consume those APIs.

## Prerequisite

Sets of packages/tools require to run the service

| Tools | Purpose |
|:---|:---|
| [Node.js 18.x](https://www.nodejs.org) | Used for `./server_node`. Executed and tested on Node.js v v16.17.0 or above. |
| [Python 3.8](https://www.python.org/downloads/) | Used for `./server_py`. Executed and tested on Python 3.8.10. |
| [Docker](https://www.docker.com/) | Used to run `MongoDB` and `MongoDB-Express` on `Docker` using `Docker Compose`. |

> :warning: Tested on MacBook Pro M1 + Google Chrome
## Setup

### Run the service

1. Use below command to setup `Mongdb database` and `Mongodb Express` using Docker Compose.

> :warning: Ensure to run the command from root folder where `docker-compose.yml` file is located.

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

> :warning: To run the app successfully, `./client` and `./server_node` is enough. `./server_py` is not required. Its just an additional alternative which I wrote as experiment.

4. Use below command to setup 

```console
cd server_py
pip install -r requirements.txt
pip install -r requirements-dev.txt
export API_SYS_INS_TYPE="DEVELOPMENT"
uvicorn "app.main:app" --host="0.0.0.0" --port=8000 --reload
```

## Future/Pending items

### Client

- [x] (Bug) - In edit option, close Modal once we receive ack from PATCH api response.
- [x] (Enhancement) - Improve validation, use schema based validation `Yup` along with `Formik` to validate form fields.
- [x] (Enhancement) - Use more TypeScript features for type check.
- [x] (Enhancement) - Run client via Docker Compose.

### Server (Node.js/Express)

- [x] (Enhancement) - Improve validation, use schema based validation `Yup` to validate request body & queries.
- [x] (Enhancement) - Run server_node via Docker Compose.

### Server (Python/FastAPI)

- [x] (Bug) - Open issue with CORS middlware on FastAPI (https://github.com/tiangolo/fastapi/discussions/6278)
