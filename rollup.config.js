import typescript from '@rollup/plugin-typescript';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import {string} from 'rollup-plugin-string';

export default [
    {
        input: 'src/main.ts',
        output: [
            {
                file: 'dist/index.js',
                format: 'umd',
                name: 'palette-explorer',
                sourcemap: true
            }
        ],
        plugins: [
            typescript(),
            nodeResolve(),
            string({
                include: ['**/*.frag', '**/*.vert', '**/*.glsl']
            }),
            commonjs()
        ]
    }
];
