import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";
//import type { notFound } from 'astro:i18n';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()], 

  pages: {
    notFound: "/NotFound404" // servidor web para que redirija todas las solicitudes de páginas no encontradas a tu página 404 personalizing. 
  }
  
});