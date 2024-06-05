import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import babel from 'vite-plugin-babel';
import prismjsPlugin from 'vite-plugin-prismjs';

export default defineConfig({
  plugins: [
    solid(), 
    babel({exclude: 'node_modules/**',}),
    prismjsPlugin({
      languages: ['css', 'html'],
      css: true,
    }),
  ],
  base: '/solid-svg-tutorial'
})
