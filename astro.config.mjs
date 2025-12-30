import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-portfolio-uzair.vercel.app",
  integrations: [
    tailwind(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
      entryLimit: 10000,
    }),
    robotsTxt(),
  ],
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      cssCodeSplit: false, // Combine CSS to reduce requests
      minify: 'terser', // Better minification
      target: 'es2020', // Modern browsers
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name].[hash][extname]';
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
