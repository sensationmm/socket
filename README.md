# PureDA_FrontEnd

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Quick Start](#quick-start)
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
- [Packages](#packages)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Quick Start

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

## Packages

This is a monorepo maintained with yarn/lerna
