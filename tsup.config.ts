import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    './src/index.ts',
    './src/monaco-editor-transform-nls.ts',
    './src/monaco-editor-transform-localize.ts',
  ],
  format: ['esm', 'cjs'],
  target: 'node18',
  dts: true,
  clean: true,
  shims: true,
  onSuccess: 'cp -r src/locales dist',
});
