import path from 'node:path';
import { Languages } from '@/const';
import type { RsbuildPlugin } from '@rsbuild/core';
import type { PluginMonacoEditorNlsOptions } from './types';

export { Languages };
export type { PluginMonacoEditorNlsOptions };

export const pluginMonacoEditorNls = (
  options: PluginMonacoEditorNlsOptions = { locale: Languages.zh_hans },
): RsbuildPlugin => ({
  name: 'plugin-monaco-editor-nls',

  setup(api) {
    api.modifyBundlerChain((chain) => {
      chain.module
        .rule('monaco-editor-localize-transform')
        .test(/monaco-editor[\\\/]esm[\\\/]vs.+\.js/)
        .use('monaco-editor-localize-transform')
        .loader(path.resolve(__dirname, 'monaco-editor-transform-localize.js'))
        .options(options)
        .end();

      chain.module
        .rule('monaco-editor-nls')
        .test(/monaco-editor\/esm\/vs\/nls.js$/)
        .use('monaco-editor-nls')
        .loader(path.resolve(__dirname, 'monaco-editor-transform-nls.js'))
        .options(options)
        .end();
    });
  },
});
