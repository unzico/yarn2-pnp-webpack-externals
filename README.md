# yarn2-pnp-webpack-externals

## Usage

1. run `yarn setup` to call the initial setup script:
- installs all dependencies
- builds the `common` and the `server` package
- clears the cache and installs only the production dependencies of the `server` package

2. run `yarn server start`

## Context

This repo is a reproduction for an issue in `yarnpkg/berry`: https://github.com/yarnpkg/berry/issues/3033
