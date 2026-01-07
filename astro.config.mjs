import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio-uzair.vercel.app",
  integrations: [
    tailwind({
      configFile: './tailwind.config.cjs',
    }),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  build: {
    inlineStylesheets: 'always', // Inline all CSS for better performance
  },
  vite: {
    build: {
      cssCodeSplit: false,
      minify: 'esbuild',
      target: 'es2020',
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return 'assets/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          },
        }
      },
    },
    ssr: {
      noExternal: ['@astrojs/*'],
    },
  },
  compressHTML: true,
  telemetry: false,
});
