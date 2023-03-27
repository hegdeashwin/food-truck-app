# Change Logs

## Format

```
**Release <Date> - v<Version>**

- [x] Change 1
- [x] Change 2
```

### Notes

* Always keep latest changes on top.

## Changes

**Release 27th March 2023 - v0.0.2**

### General Infra (Node, Python, Web Client)

- [x] Refactor Dockerfile.
- [x] Refactor Docker Compose file to include Web Client, Node and Python web services.

### Server Food Truck Service

- [x] Bug fix - date format for write and read path.
- [x] Refactor props types and include constants.

### Client (Web)

- [x] Include Prettier and format codebase

**Release 21st March 2023 - v0.0.1**

### General Infra (Node)

- [x] Use [Express](https://expressjs.com/) as base framework to build the `REST` microservice in JavaScript/Node.
- [x] Setup `project scaffolding` like files and directories, event handlings, routers, middlewares etc as per Express guidelines.
- [x] Add `configurations` for hostname, port, env etc. for development, stage and production env.
- [x] Add special routes `/info` and `/health`.
- [x] Define common `logger` for application logging.
- [x] Fix EsLint errors and warnings.
- [x] Add `Docker` support and document the commands to build the Docker image and run the service.
- [x] Add `Health Check API` interval on Dockerfile config.

### General Infra (Python)

- [x] Use [FastAPI](https://fastapi.tiangolo.com/) as base framework to build the `REST` microservice in Python.
- [x] Setup `project scaffolding` like files and directories, event handlings, routers, middlewares etc as per FastAPI guidelines.
- [x] Add `configurations` for hostname, port, env etc. for development, stage and production env.
- [x] Add special routes `/info` and `/health`.
- [x] Use [Poetry](https://python-poetry.org/docs/) as a tool for dependency management and packaging in Python. Default option is `Pip`.
- [x] Format *.py files via `Black` and `isort`.
- [x] Define common `logger` for application logging.
- [x] Fix PyLint errors and warnings.
- [x] Add `Docker` support and document the commands to build the Docker image and run the service.
- [x] Add `Health Check API` interval on Dockerfile config.

### Server Food Truck Service

- [x] API to GET/POST/PATCH/DELETE Food Truck data into MongoDB (on both stack Node and Python)
- [x] Connect MongoDB - hosted using Docker Compose.

### Client (Web)

- [x] Use [Next.js](https://nextjs.org/) framework which uses [React](https://react.dev/) as base library along with [TypeScript](https://www.typescriptlang.org/)
- [x] Use [Bootstrap`](https://getbootstrap.com/) as base CSS/UI components library along with [React Icons](https://react-icons.github.io/react-icons/)
- [x] Setup `project scaffolding` like files and directories, etc.
- [x] Functionality See `./documents` for screen shots.
