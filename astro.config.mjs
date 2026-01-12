import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import preloadCSS from "./preload-css-plugin.mjs";

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
    preloadCSS(),
  ],
  build: {
    inlineStylesheets: 'always',
    assets: '_astro',
  },
  vite: {
    build: {
      cssCodeSplit: false,
      minify: 'terser',
      target: 'es2020',
      cssMinify: 'lightningcss',
      terserOptions: {
        compress: {
          drop_console: true,
          passes: 2,
        },
        mangle: true,
        format: {
          comments: false,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: undefined,
          assetFileNames: 'assets/[name].[hash][extname]',
          chunkFileNames: 'assets/[name].[hash].js',
          entryFileNames: 'assets/[name].[hash].js',
        },
      },
    },
    ssr: {
      noExternal: ['@astrojs/*'],
    },
    optimizeDeps: {
      exclude: ['@astrojs/*'],
    },
  },
  compressHTML: true,
  telemetry: false,
});
