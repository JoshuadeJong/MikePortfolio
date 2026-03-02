import fs from 'fs';
import path from 'path';
import { minify as minifyHTML } from 'html-minifier-terser';
import { minify as minifyJS } from 'terser';

const buildDir = path.join(__dirname, '../build');

async function minifyFile(filePath: string): Promise<void> {
  const ext = path.extname(filePath);
  const content = fs.readFileSync(filePath, 'utf8');

  if (ext === '.html') {
    const minified = await minifyHTML(content, {
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    });
    fs.writeFileSync(filePath, minified);
  } else if (ext === '.js') {
    const result = await minifyJS(content);
    if (result.code) fs.writeFileSync(filePath, result.code);
  }
}

async function processDir(dir: string): Promise<void> {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await processDir(fullPath);
    } else if (entry.name.endsWith('.html') || entry.name.endsWith('.js')) {
      await minifyFile(fullPath);
    }
  }
}

processDir(buildDir).then(() => console.log('Minification complete'));
