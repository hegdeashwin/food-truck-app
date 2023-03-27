# Dockerfile for production
# Set the base image from the public repositories.
FROM python:3.8-slim

# Sets the environment variable
ENV APP_PY_SERVER_PORT=8000

# Set the working directory
WORKDIR "/app"

# Copy requirements and install dependencies
COPY ./requirements.txt .
COPY ./requirements-dev.txt .
RUN pip install -r requirements.txt
RUN pip install -r requirements-dev.txt
RUN apt-get update -y
RUN apt-get install curl -y

COPY . .

# Set the container listens on the specified network ports at runtime
EXPOSE $APP_PY_SERVER_PORT

# Test a container is still working
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s CMD curl --fail http://localhost:$APP_PY_SERVER_PORT/api/v1/health || exit 1

# Provide defaults for an executing container
CMD uvicorn app.main:app --proxy-headers --host 0.0.0.0 --port $APP_PY_SERVER_PORT
