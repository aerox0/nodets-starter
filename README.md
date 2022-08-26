# NodeTS Startder

## Run in development mode:

```:
docker-compose up --build -V
```

## Run in production mode:

```:
# Build docker
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -f docker-compose.yml -f docker-compose.prod.yml build

# Run app
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d
```
