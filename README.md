# rsbuild-plugin-monaco-editor-nls-0.31.0

rsbuild-plugin-monaco-editor-nls-0.31.0 is a Rsbuild plugin to localize monaco-editor.

<p>
  <a href="https://www.npmjs.com/package/rsbuild-plugin-monaco-editor-nls-0.31.0">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-monaco-editor-nls-0.31.0?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage


monaco-editor version is 0.31.0

Install:

```bash
npm add rsbuild-plugin-monaco-editor-nls-0.31.0 -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginMonacoEditorNls, Languages } from "rsbuild-plugin-monaco-editor-nls";

export default {
  plugins: [pluginMonacoEditorNls({
    locale: Languages.zh_hans,
  })],
};
```

## Options

### locale

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginMonacoEditorNls({
  locale: Languages.zh_hans
});
```

## License

[MIT](./LICENSE).
