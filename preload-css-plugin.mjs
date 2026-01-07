import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

export default function preloadCSS() {
  return {
    name: 'preload-css',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distDir = dir.pathname;
        const htmlFiles = readdirSync(distDir).filter(f => f.endsWith('.html'));
        
        htmlFiles.forEach(file => {
          const filePath = join(distDir, file);
          let html = readFileSync(filePath, 'utf-8');
          
          // Find CSS file reference
          const cssMatch = html.match(/href="(\/assets\/style\.[a-f0-9]+\.css)"/);
          if (cssMatch) {
            const cssPath = cssMatch[1];
            // Insert preload before the stylesheet link
            const preloadTag = `<link rel="preload" as="style" href="${cssPath}" fetchpriority="high" />\n  `;
            html = html.replace(
              /<link rel="stylesheet" href="\/assets\/style/,
              preloadTag + '<link rel="stylesheet" href="/assets/style'
            );
            writeFileSync(filePath, html);
          }
        });
      }
    }
  };
}
