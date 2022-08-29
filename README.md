# Nodets Starter

This project is a simple nodets starter that's use monorepo (turborepo) for microservices and code ponder, in combination with docker made for production and development environment.

## Documentation

Differences between packages and apps:

```bash
packages/  # should contain only code that is build or shared
apps/      # should contain runnable code like next.js, svelte, express, etc.
```

## Installation

Using docker

```bash
# For development environment
docker-compose up --build -V

# For production
## Build
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.prod.yml build

## Run
docker-compose -f docker-compose.prod.yml up -d
```

Using local environment

```bash
# Install dependencies
yarn/npm install

# Build packages
yarn build

# Run app in dev mode (it will automatically run all packages and apps that have defined dev script in packages.json)
yarn dev

# Build app
yarn build
```

Note: dotenv isn't installed by default