![Build Status](https://github.com/modusintegration/microfrontend-shell-boilerplate/actions/workflows/node.js.yml/badge.svg)

# Microfrontend Shell Boilerplate

This is the Shell application boilerplate project to create microfrontends.

It's built in React / Redux / Typescript and it includes some other libraries.

This project follows [JAMStack](https://jamstack.org/) architecture and attempts to follow it's best practices.

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [How to develop](#how-to-develop)
- [How to contribue](#how-to-contribute)
- [How to deploy](#how-to-deploy)
- [Configuration](#configuration)

## Prerequisites

It requires `node v12` to run, please make sure to have the correct version installed.

You can check your node version with `node --version`.

**Note:** you can use [nvm](https://github.com/nvm-sh/nvm) to easily install and manage multiple node versions.

## Installation

Before installing the project, please make sure you have read the [prerequisites](#prerequisites).

1. Install the dependencies with `yarn install`
2. Run the project with `yarn start`

At this point you can navigate with your browser to [https://localhost:3001](https://localhost:3001) to see the application running in the browser.

**Note**: depending on the configuration, you might be redirected to the login form of the authentication provider.

You are now ready to develop :rocket:

## How to develop

There are a number of rules that need to be followed to ensure good conding standards and keep the application structure compliant with the other Modusbox React applications.

Before starting writing code, make sure you follow the [coding guidelines](./docs/coding-guidelines.md).

- [Structuring the code](./docs/structuring-the-code.md)
- [Coding guidelines](./docs/coding-guidelines.md)
- [Available scripts and commands](./docs/available-scripts-and-commands.md)

For detailed instructions on what are the steps to follow when developing, please read the [development steps](./docs/development-steps.md) page.

## How to contribute

Everyone contributing to this project shall respect the contribution rules.

Security measures are applied to the repository so that it is protected from (some of) the bad practices.

For detailed instructions on how to contribute, please read the [contribution rules](./docs/contribution-rules.md) page.


## How to deploy

The app is configured to run in a docker image served by an embedded webserver; that makes it portable and convenient when has to run in a kuberneters environment.

For detailed instructions on the deployment process please read [deploying to production](./docs/deploying-to-production.md).

For more about docker, please read the [docker configuration page](./docs/docker.md).

## Configuration

All the dev tools are already pre-configured and everything should work out of the box.

For more details read [configuring the tools](./docs/configuring-the-tools.md).

- [Microfrontend setup](./docs/microfrontend-setup.md)
- [Configuring the tools](./docs/configuring-the-tools.md)
- [Environment variables](./docs/environment-variables.md)
- [External API](./docs/external-api.md)