import * as fs from 'fs';
import * as path from 'path';
import {pages, template} from '../src/content/StaticContent';

const outDir = path.join(__dirname, '..', process.argv[2] ?? 'build');

pages.forEach(page => {
  fs.writeFileSync(path.join(outDir, page.path), template(page));
  console.log(`Generated: ${page.path}`);
});

console.log('Static pages generated successfully!');
