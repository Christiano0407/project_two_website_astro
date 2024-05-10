import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
//import type { notFound } from 'astro:i18n';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), 
    react({
     include: ['**/react/*'],
  }),],

});