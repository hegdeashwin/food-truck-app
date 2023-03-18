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

**Draft 18th March 2023 - v0.0.1**

### General Infra

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

- [x] Add dummy Food Truck API on high level.

### Client (Web)

- [x] Use [Next.js](https://nextjs.org/) framework which uses [React](https://react.dev/) as base library along with [TypeScript](https://www.typescriptlang.org/)
- [x] Use [Bootstrap`](https://getbootstrap.com/) as base CSS/UI components library along with [React Icons](https://react-icons.github.io/react-icons/)
- [x] Setup `project scaffolding` like files and directories, etc.
