/// <reference types="vitest" />
import { getViteConfig } from 'astro/config';

export default getViteConfig({
  test: {
    // Vitest configuration options
     // Opciones de configuración de Vitest
     globals: true,
     environment: 'jsdom',
     setupFiles: './vitest.setup.ts'
  },
});