import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
//import type { notFound } from 'astro:i18n';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react({
    include: ['**/react/*']}), 
    mdx(), 
  ], 
  prefetch: true // Puedes habilitar la precarga con la configuración
});