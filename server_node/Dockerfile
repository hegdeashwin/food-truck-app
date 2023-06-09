# Dockerfile for production
# Set the base image from the public repositories.
FROM node:18-alpine

# Sets the environment variable
ENV APP_NODE_SERVER_PORT=8005
ENV NODE_ENV=production

# Set the working directory
WORKDIR "/app"

# Copy package and install dependencies
COPY package.json .
RUN npm install
RUN apt-get update -y
RUN apt-get install curl -y

# Copy remaining codebase
COPY . .

# Set the container listens on the specified network ports at runtime
EXPOSE $APP_NODE_SERVER_PORT

# Test a container is still working
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s CMD curl --fail http://localhost:$APP_NODE_SERVER_PORT/api/v1/health || exit 1

# Provide defaults for an executing container
CMD ["npm", "run", "start"]
