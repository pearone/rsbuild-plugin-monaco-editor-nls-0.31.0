import { Languages } from '@/const';
import type { PluginMonacoEditorNlsOptions } from '@/types';
import { getLocalizeMapping } from './read-file';

export default function monacoEditorLocalizedTransformLoader(
  this: {
    getOptions: () => PluginMonacoEditorNlsOptions;
    resourcePath: string;
  },
  code: string,
) {
  const options: PluginMonacoEditorNlsOptions = this.getOptions();
  const filepath = this.resourcePath;
  const locale = options.locale ?? Languages.zh_hans;
  const localeData = getLocalizeMapping(locale);

  if (
    !/esm[\\\/]vs[\\\/].*nls\.js/.test(filepath) &&
    !/.*.worker/.test(filepath)
  ) {
    let _code = code;
    const re = /(?:monaco-editor\/esm\/)(.+)(?=\.js)/;
    if (re.exec(filepath) && code.includes('localize(')) {
      let path = RegExp.$1;
      path = path.replaceAll('\\', '/');
      if (localeData) {
        _code = _code.replace(/localize\(/g, `localize("${path}", `);
        _code = _code.replace(/localize2\(/g, `localize2('${path}', `);
      }
      return _code;
    }
  }
  return code;
}
