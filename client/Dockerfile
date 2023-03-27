# Dockerfile for production
# Set the base image from the public repositories.
FROM node:18-alpine

# Sets the environment variable
ENV APP_NODE_SERVER_PORT=3000

# Set the working directory
WORKDIR "/app"

# Copy package and install dependencies
COPY package.json .
RUN npm install

# Copy remaining codebase
COPY . .

# Generate production grade build .next directory
RUN npm run build

# Test a container is still working
HEALTHCHECK --interval=30s --timeout=30s --start-period=30s CMD curl --fail http://localhost:$APP_NODE_SERVER_PORT/api/health || exit 1

# Provide defaults for an executing container
CMD ["npm", "run", "start"]
