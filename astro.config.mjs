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
    inlineStylesheets: 'always', // Inline critical CSS for faster FCP
  },
  vite: {
    build: {
      cssCodeSplit: true,
      minify: 'esbuild',
      target: 'esnext',
      cssMinify: true,
      rollupOptions: {
        output: {
          manualChunks: undefined,
          assetFileNames: (assetInfo) => {
            // Better asset naming for caching
            if (assetInfo.name.endsWith('.css')) {
              return 'assets/css/[name].[hash][extname]';
            }
            return 'assets/[name].[hash][extname]';
          },
        }
      },
    },
    // Enable build optimizations
    ssr: {
      noExternal: ['@astrojs/*'],
    },
  },
  compressHTML: true, // Minify HTML output
});
