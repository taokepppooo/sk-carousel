import packageJson from './package.json'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: `build/cjs/${packageJson.name}.cjs.js`,
        format: 'cjs',
        strict: true,
        sourcemap: true,
        exports: 'auto',
      },
      {
        file: `build/esm/${packageJson.name}.esm.js`,
        format: 'esm',
        strict: true,
        sourcemap: true,
      },
      {
        file: `build/umd/${packageJson.name}.umd.js`,
        format: 'umd',
        strict: true,
        sourcemap: false,
        name: packageJson.name,
        plugins: [terser()],
      },
    ],
    plugins: [
      nodeResolve(),
      typescript({
        tsconfig: 'tsconfig.json',
        noEmit: true,
      }),
    ],
  },
]
