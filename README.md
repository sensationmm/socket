# PureDA_FrontEnd

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Quickstart](#quickstart)
- [Design](#design)
- [Testing](#testing)
  - [Unit Testing](#unit-testing)
  - [Integration Testing](#integration-testing)
- [Development](#development)
  - [Requirements](#requirements)
  - [Components](#components)
    - [Styling](#styling)
    - [Code Style](#code-style)
    - [Storybook](#storybook)
    - [OS Support](#os-support)
  - [Commit Message Format](#commit-message-format)
  - [Env Vars](#env-vars)
    - [Fetching an ENV var](#fetching-an-env-var)
    - [Adding a new ENV var](#adding-a-new-env-var)
- [Packages](#packages)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quickstart

| Command             | Description                                         |
| ------------------- | --------------------------------------------------- |
| `yarn`              | Install dependencies                                |
| `yarn test --watch` | Run tests in watch mode                             |
| `yarn lint`         | Lint TypeScript files                               |
| `yarn tslint-check` | Check for any conflicts between tslint and prettier |

## Design

Tokens are available at `./src/core/tokens`.

## Testing

### Unit Testing

Uses jest for unit tests, coverage for components.

### Integration Testing

Integration testing is available with `packages/apps/e2e`.

To run these inline.

```
cd packages/apps/e2e
yarn start
```

To run in GUI mode

```
cd packages/apps/e2e
yarn cypress:open
```

## Development

### Requirements

- TypeScript
- React
- PostCSS
- Gatsby
- GraphQL
- Jest
- Enzyme/React Testing Library

### Components

- Use kebab-case for all folder/file names.
- Use dot.notation for file type (stories, component, test, controller etc.).

```
./packages/
└── components
    └── component-name        <-- kebab-case everywhere in file names
        ├── package.json          <-- name = @somo/pda-components-component-name
        ├── tsconfig.json         <-- should extend master tsconfig and add any references
        └── src
            ├── index.ts                     <-- Exports (must exist)
            ├── index.stories.tsx            <-- Storybook (TBD)
            ├── component-name.module.css    <-- PostCSS
            ├── component-name.component.tsx <-- React
            └── component-name.test.tsx      <-- Jest/Enzyme
```

#### Styling

Uses PostCSS via Webpack, plugins available at `./scripts/webpack/plugins/postcss-plugins.js`.

#### Code Style

Uses ts-lint with prettier. However there are a few conventions that developers should be aware of.

- Please use a blank line between first- and third-party import groups.
- Use `is`/`has` prefix for `boolean` properties.

#### Storybook

Stories are used to develop components in isolation.
Storybook is configured to check for typescript files that match the pattern `**/*.stories.(ts|tsx)`

Run storybook for component development

```bash
cd ./packages/apps/storybook
yarn start

```

#### OS Support

On Microsoft Windows, ensure `cross-env` is available globally, if not it can be installed from NPM.

```bash
npm i -g cross-env
```

### Commit Message Format

Commit messages should follow the [conventional commits standard](https://www.conventionalcommits.org/en/v1.0.0-beta.3/).

### Env Vars

When using Env vars within the browser runtime, you should use the utils-env (`packages/utils/env/src/index.ts`) package to retrieve env vars.

#### Fetching an ENV var

Example

```ecmascript 6
import { Env, getEnv } from '@somo/pda-utils-env/src';

getEnv(Env.StaticAssetsUrl)
```

All browser accessable envs should be added the `Env` enum, this allows them to be used around the project and shouldn't
conflict if we later decide to modify the resolved var name.

When fetching in a node env you can either use the `getEnv` method or for protected values (such as private tokens to be used at build time) use `process.env`.

#### Adding a new ENV var

To add a new environmental var, you will need to insert it in 5 special places. You can also find these by searching for `ADD ENV`.

- `__scripts__/setup-tests.ts` (1 usage found) - Allows jest to resolve it
- `packages/apps/storybook/src/preview-head.html` (1 usage found) - Adds window.env for storybook
- `packages/utils/env/src/index.ts` (1 usage found) - Add the enum for TypeScript
- `.pipelines/build-steps.yml` (2 usages found) - If set with AZ add to pipeline

## Packages

This is a monorepo maintained with yarn/lerna
