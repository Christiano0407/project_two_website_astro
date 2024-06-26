<<<<<<< HEAD
# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat)
=======

# project_two_website_astro

Project Web ( Test ) with astro.  Project Of Prove With Astro. I will Use an API (Platzi) for the Website of Products (Test).
>>>>>>> a649412b7d1414aea4fb8d6a741dec5e24fc1c57

# Mode Closet

H1 Mode Closet

=============

# Project Astro

> First Project Web with Astro. I will Worked with the API of Platzi (Platzi Fake) to products (Clothes).

![Logo_img](./src/assets/icons/logo_closet_1.png?width=250&height=200)

> Init Project In Astro

[Astro Framework](https://astro.build/)

```bash

npm create astro@latest

```

> Platzi (Website) & Platzi Fake API

[Platzi](https://platzi.com/new-home/)

[Platzi_fake](https://fakeapi.platzi.com/)

## Tools To The Project

> Tailwind CSS

[TailwindCSS](https://tailwindcss.com/)

> Add Tailwind CSS with Astro

[Astro_integration](https://docs.astro.build/en/guides/integrations-guide/)

```bash

npx astro add tailwind

npm install @astrojs/tailwind tailwindcss 

```

> React Js With Astro

[React](https://react.dev/)

[React_ Astro](https://docs.astro.build/en/guides/integrations-guide/react/)

```bash

npx astro add react

npm install @astrojs/react

```

> Astro Configuration To React Js

```js
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  // ...
  integrations: [react()],
});
```

## Validation & Test to Data With ZOD

> Install ZOD (Typescript)

```bash

npm i zod

```

## Test With Vitest

> Testing With Vite

[Vitest](https://vitest.dev/)

```bash

npm install -D vitest

```

> Using Jest To My Project Web (Install Jest To Using With: Astro, Typescript, React, TailwindCSS )

[js](https://jestjs.io/)

> Install Jest to Testing

```bash

npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/preset-env @babel/preset-react @babel/preset-typescript ts-jest identity-obj-proxy

```

> Configure with Babel;

```javascript

module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
};


```

> Configure With Jest:

```javascript

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy', // Para manejar los estilos
    '^@/(.*)$': '<rootDir>/src/$1' // Ajusta según tu configuración de paths
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Usa ts-jest para transformar archivos TypeScript
    '^.+\\.jsx?$': 'babel-jest', // Usa babel-jest para transformar archivos JavaScript
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@testing-library)/)'
  ],
};

```

> Testing Library:

```javascript
import '@testing-library/jest-dom/extend-expect';
```

> Configure With Typescript:

```javascript
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["jest", "@testing-library/jest-dom"]
  },
  "include": ["src"]
}

```

> Configure With Tailwind CSS:

```javascript
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,astro}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

> Configure Package.JSON

```json
{
  "scripts": {
    "test": "jest"
  }
}

```

### Project Finished (Images Mobile, Tablet & Desktop)

> Home: Landing Page

![home](./src/assets/img_final/localhost_4321_%20(2).png)

![home_landing](./src/assets/img_final/localhost_4321_%20(1).png)

> Clothes Page: 

![clothes](./src/assets/img_final/localhost_4321_%20(10).png)

![clothes_two](./src/assets/img_final/localhost_4321_%20(11).png)

![clothes_two](./src/assets/img_final/localhost_4321_%20(12).png)

![clothes_three](./src/assets/img_final/localhost_4321_%20(4).png)

> Blog Page:

![blog](./src/assets/img_final/localhost_4321_%20(6).png)

> Podcast Page:

![podcast](./src/assets/img_final/localhost_4321_%20(7).png)

> Contact Page:

![Contact](./src/assets/img_final/localhost_4321_%20(9).png)

#### Note

> Project Note:

- This Project Only was created to practice for first time with the Framework Astro Js.

 The UI it's will don't better in design because to only to prove Astro.

- This project don't exist in Production. Thank you.

#### Deploy Your Astro Site

> Astro Documentation

[Deploy](https://docs.astro.build/en/guides/deploy/)
