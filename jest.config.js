export default {
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
