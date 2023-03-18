# Food Truck Microservice/API

List of APIs for Food Truck functionalities.

## Prerequisite

Sets of packages/tools require to run the service directly without isolation

* [Python 3.8](https://www.python.org/downloads/)
* [miniconda](https://docs.conda.io/en/latest/miniconda.html)
* [Poetry](https://python-poetry.org/)

Sets of packages/tools require to run the service on Docker isolation

* [Docker](https://www.docker.com/)

## Scaffolding

The given structure is as follows:

```
app/
├── __init__.py
├── main.py
├── api.py
├── metadata.py
├── configs/
│   └── development.yml
│   └── production.yml
│   └── stage.yml
├── core/
│   └── __init__.py
│   └── common_handlers.py
│   └── special_handlers.py
├── endpoints/
│   └── __init__.py
│   └── health.py
│   └── info.py
│   └── router.py
│   └── food_truck.py
├── middlewares/
│   └── __init__.py
│   └── validation.py
└── models/
│   └── __init__.py
    └── food_truck.py
├── test_main.py
```

| Files/Folders | Purpose |
|:---|:---|
| `__init__.py` | Defines and initializes the app configuration. |
| `main.py` | Defines the FastAPI application, adds middleware, includes routers, and creates the Mangum handler. |
| `api.py` | |
| `metadata.py` | |
| `configs/` | |
| `core/` | |
| `endpoints/` | |
| `middlewares/` | |
| `models/` | |

- [x] Use [FastAPI](https://fastapi.tiangolo.com/) as base framework to build the `REST` microservice.
- [x] Use [Poetry](https://python-poetry.org/docs/) as a tool for dependency management and packaging in Python.
- [x] Defined `project scaffolding` like files and directories, event handlings, routers, middlewares etc.
- [x] Defined `default configurations` for hostname, port, environment etc.
- [x] Defined common `logger` for application logging.
- [x] Preconfigured special routes `/info` and `/health`.
- [x] Use `Docker` to make it easy to run the app on container and shift it.
- [x] Use `PyLint` as code linter.

## Setup

### Environment Variables

```console
export <Name>=<Value>

For example:
export API_SYS_INS_TYPE="DEVELOPMENT"
```

:warning: No space before and after `=` sign.

| Name | Purpose | Possible Values |
|:---|:---|:---|
| API_SYS_INS_TYPE | Help to identify system instance type on which the app service is running | `DEVELOPMENT`, `STAGE` and `PRODUCTION` |

### Development

```console
export API_SYS_INS_TYPE="DEVELOPMENT"
```

**Install all dependencies using Pip**

```console
pip install -r requirements.txt
pip install -r requirements-dev.txt
```

**Run the service**

```console
uvicorn "app.main:app" --host="0.0.0.0" --port=8000 --reload
```

**Build & Run the service using Docker**

```console
docker build -t food_truck_service .
docker run -d -p 8000:8000 food_truck_service
```

**Run the tests**

```console
pytest
```

**Run the Swagger API Docs**

```console
http://localhost:<PORT>/api/v1/docs
```

**Run the lint**

Run pylint before committing the changes and ensure code quality at least 9.30/10

```console
pylint --rcfile .pylintrc $(git ls-files '*.py')
```

**Run the formatter**

Run black & isort before committing the changes

```console
black app
isort **/*.py
```

### Stage

```console
export API_SYS_INS_TYPE="STAGE"
```

**Install only dependencies (exclude dev-dependencies) using Poetry**
```console
poetry install --no-dev
```

**Run the service**

```console
uvicorn "app.main:app" --host="<STAGE_HOST_IP>" --port=<STAGE_PORT> --workers 2
```

**Run the Swagger API Docs**

```console
http://<STAGE_BASE_URL>:<STAGE_PORT>/api/v1/docss
```

### Production

```console
export API_SYS_INS_TYPE="PRODUCTION"
```

**Install only dependencies (exclude dev-dependencies) using Poetry**
```console
poetry install --no-dev
```

**Run the service**

```console
uvicorn "app.main:app" --host="<PRODUCTION_HOST_IP>" --port=<PRODUCTION_PORT> --workers 4
```

**Run the Swagger API Docs**

```console
http://<PRODUCTION_BASE_URL>:<PRODUCTION_PORT>/api/v1/docs
```

## References

* [Change Logs](CHANGELOGS.md)
* [PyLint Errors](https://vald-phoenix.github.io/pylint-errors/#list-of-errors)
