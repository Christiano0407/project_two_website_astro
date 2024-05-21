export default {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react', 
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
};
