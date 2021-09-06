## Docker

The app can be run in a docker container.

- [Build a local image](build-a-local-image)
- [Running-a-local-image](running-a-local-image)
- [Build time configuration](build-time-configuration)
- [Runtime configuration](runtime-configuration)

### Build a local image

The image can be easily built with `docker build` as follows:

```bash
docker build -t microfrontend-boilerplate:local .
```

### Running a local image

You can run the app container as follows:

```bash
docker run -p 8081:8081 microfrontend-boilerplate:local
```

### Build time configuration

You can pass the environment variable `REACT_APP_API_BASE_URL` if you want to use a static api base url in your application.

The frontend production build can include the version and commit hash the build uses.
The env variables responsible to add these values to the bundle are:

- `REACT_APP_VERSION` the package.json version
- `REACT_APP_COMMIT` the current commit hash

```bash
docker build \
  --build-arg REACT_APP_NAME=`npm run name --silent` \
  --build-arg REACT_APP_VERSION=`npm run version --silent` \
  --build-arg REACT_APP_COMMIT=`git rev-parse HEAD`\
  --build-arg PUBLIC_PATH=https://localhost:8081/\
  -t microfrontend-boilerplate \
  .
```

### Runtime configuration

The application loads the configuration file `config.json` at bootstrap in order to determine what are the api and auth endpoints.

The `config.json` is produced at runtime, it uses environment variables passed to docker.

```bash
docker run --rm \
  -p 8081:8080 \
  -e API_BASE_URL="https://your-api-base-url" \
  -e MOCK_API="true" \
   microfrontend-boilerplate
```