import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.iife.js',
      format: 'iife',
      sourcemap: true,
      name: 'toolAnt',
      globals: {
        lodash: '_'
      }
    },
  ],
  plugins: [
    // 可以 import node_modules 中的模块
    resolve(),
    // 将 commonjs 规范的模块，转换为 es6
    commonjs(),
    // typescript 转换，只有最基础的转换，将 ts > es6
    typescript(),
    // babel 编译 ts 转换出的 es6 模块
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
      extensions: ['.js', '.ts']
    }),
  ],
  external: ['lodash'],
};