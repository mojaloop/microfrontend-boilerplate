## Environment Variables

The application is driven by some environment variables used at build and runtime.


### Always Available Environment Variables

| Name | Description | Default |
|---|---|---|
| `REACT_APP_NAME` | name extracted from package.json` | - |
| `REACT_APP_VERSION` | version extracted from package.json` | - |
| `REACT_APP_COMMIT` | commit extracted from git history | - |
| `PUBLIC_PATH` | public url where the app is accessible | http://localhost:3001/ |

### Used Locally / Static Files CDN

| Name | Description | Default | Used Locally | Used In A Deployment
|---|---|---|---|---|
| `REACT_APP_API_BASE_URL` | base url / path for api | /api | V | ? |
| `REACT_APP_MOCK_API` |  enables mock api locally | true | V | ? |
| `DEV_PORT` | webpack server dev http port | 3001 | V |   |

### Docker Only Environment Variables

| Name | Description |
|---|---|
| `API_BASE_URL` | base path for api (could be a URL) |
| `MOCK_API` | enable mocking api |

#### Note About Remote URLs Variables

This project is using the `REMOTE_1_URL` to dinamically load a remote. You can add as many remotes as you want or you can decide to use static know localtions without relying on environment variables for the purpose.

#### Note About The Public Path

When working with several host/remote applications it is a requirement that
`PUBLIC_PATH` are updated to avoid port collision.