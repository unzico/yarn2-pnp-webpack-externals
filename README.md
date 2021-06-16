# yarn2-pnp-webpack-externals

## Usage

1. run `yarn setup` to call the initial setup script:
- installs all dependencies
- builds the `common` and the `server` package
- clears the cache and installs only the production dependencies of the `server` package

2. run `yarn server start`

## Context

This repo is a reproduction for an issue in `yarnpkg/berry`: https://github.com/yarnpkg/berry/issues/3033

The issue was fixed in https://github.com/unzico/yarn2-pnp-webpack-externals/commit/6189160726344ebf2619f6f75dddb6bc72f6266c#diff-198b4421243dee93527b6ca752ea44a27b290dbc240c9fbbc09ccbe487e98c94