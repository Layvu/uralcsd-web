import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteSvgSpriteWrapper from 'vite-svg-sprite-wrapper';

import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

import eslint from 'vite-plugin-eslint2';

export default defineConfig({
    plugins: [
        react(),
        eslint({
            cache: true,
            fix: true,
        }),
        tsconfigPaths(),
        ViteSvgSpriteWrapper({
            icons: 'src/assets/icons/**/*.svg',

            outputDir: 'public/img',

            generateType: true,
            typeName: 'SvgIconId',
            typeFileName: 'svgIconId',
            typeOutputDir: './src/types',

            sprite: {
                inline: false,
                prefix: 'icon-',

                svg: {
                    svgo: {
                        plugins: [
                            { removeAttrs: { attrs: '(fill|stroke)' } },
                            { removeXMLNS: true },
                            { removeComments: true },
                        ],
                    },
                },
            },
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@services': path.resolve(__dirname, './src/services'),
            '@assets': path.resolve(__dirname, './src/assets'),
        },
    },
    // css: {
    //     preprocessorOptions: {
    //         scss: {
    //             additionalData: `
    //                 @use "@styles/global" as *;
    //             `,
    //         },
    //     },
    // },
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('swiper')) {
                            return 'swiper';
                        }
                        return 'vendor';
                    }
                },
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            },
        },
        cssCodeSplit: false, // Генерировать один CSS-файл
        sourcemap: false,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                unused: true,
                dead_code: true,
            },
            format: {
                comments: false,
            },
        },
    },
});
