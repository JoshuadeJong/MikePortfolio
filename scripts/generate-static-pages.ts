import * as fs from 'fs';
import * as path from 'path';
import {pages, template} from '../src/content/StaticContent';

const buildDir = path.join(__dirname, '..', 'build');

pages.forEach(page => {
  const filePath = path.join(buildDir, page.path);
  fs.writeFileSync(filePath, template(page));
  console.log(`Generated: ${page.path}`);
});

console.log('Static pages generated successfully!');
