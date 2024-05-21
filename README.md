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

## Validation & Test to Data With ZOD

> Install ZOD (Typescript)

```bash

npm i zod

```

## Testing With Jest

> Using Jest To My Project Web (Install Jest To Using With: Astro, Typescript, React, TailwindCSS )

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
