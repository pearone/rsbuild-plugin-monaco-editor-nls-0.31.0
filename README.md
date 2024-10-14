# rsbuild-plugin-monaco-editor-nls

rsbuild-plugin-monaco-editor-nls is a Rsbuild plugin to localize monaco-editor.

<p>
  <a href="https://npmjs.com/package/rsbuild-plugin-monaco-editor-nls">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-monaco-editor-nls?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
  <a href="https://npmcharts.com/compare/rsbuild-plugin-monaco-editor-nls?minimal=true"><img src="https://img.shields.io/npm/dm/rsbuild-plugin-monaco-editor-nls.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="downloads" /></a>
</p>

## Usage

Install:

```bash
npm add rsbuild-plugin-monaco-editor-nls -D
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
