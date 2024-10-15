import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(function main() {
  // node_modules/vscode-loc.git/i18n/vscode-language-pack-zh-hans/translations/main.i18n.json
  const dirs = fs.readdirSync(
    path.resolve(__dirname, '../node_modules/vscode-loc.git/i18n'),
  );

  const distDir = path.resolve(__dirname, '../dist/locales');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  for (const dir of dirs) {
    const locale = path.basename(dir).slice('vscode-language-pack-'.length);
    const localePath = path.resolve(
      __dirname,
      '../node_modules/vscode-loc.git/i18n',
      dir,
      'translations',
      'main.i18n.json',
    );

    const distLocalePath = path.resolve(distDir, `${locale}.json`);
    const content = JSON.parse(fs.readFileSync(localePath, 'utf8')) as {
      contents: Record<string, unknown>;
    };
    fs.writeFileSync(distLocalePath, JSON.stringify(content.contents, null, 2));
  }
})();
