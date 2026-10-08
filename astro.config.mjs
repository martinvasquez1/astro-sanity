// @ts-check

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import sanity from '@sanity/astro';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: "dkui3w8e",
      dataset: "production",
      useCdn: false, // for static builds
    }),
  ],

  adapter: cloudflare(),
});