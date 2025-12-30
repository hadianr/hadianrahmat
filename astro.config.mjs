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
    inlineStylesheets: 'auto', // Only inline truly critical CSS
  },
  vite: {
    build: {
      cssCodeSplit: true, // Split CSS for better parallelization
      minify: 'terser',
      target: 'es2020',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            tailwind: ['tailwindcss'],
          },
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
