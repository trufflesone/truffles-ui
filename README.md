# UI component library for Truffles

## Usage

- Install package

  ```shell
  npm install @trufflesone/truffles-ui

  or

  yarn add @trufflesone/truffles-ui

  or

  pnpm add @trufflesone/truffles-ui
  ```

- Use it like this

  ```javascript
  import { Button } from "@trufflesone/truffles-ui";

  const App = () => {
    return <Button>Click Me</Button>;
  };

  export default App;
  ```

## Development

- Clone the repo.
- Install deps.

  ```shell
  yarn
  ```

- Modify components in `src/components` folder.
- View components on storybook.

  ```shell
  yarn storybook
  ```

- Bundle components with rollup.

  ```shell
  yarn run rollup
  ```
