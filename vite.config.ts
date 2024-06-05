import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [solid(), babel({exclude: 'node_modules/**',})],
  base: '/solid-svg-tutorial'
})
