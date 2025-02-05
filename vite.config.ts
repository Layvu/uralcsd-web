import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper";

import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

import eslint from "vite-plugin-eslint2";

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    tsconfigPaths(),
    ViteSvgSpriteWrapper({
      icons: "src/assets/icons/**/*.svg",

      outputDir: "public/img",

      generateType: true,
      typeName: "ISvgIcon",
      typeFileName: "SvgIcon",
      typeOutputDir: "./src/types",

      sprite: {
        inline: false,
        prefix: "icon-",

        svg: {
          svgo: {
            plugins: [
              { removeAttrs: { attrs: "(fill|stroke)" } },
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
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ` 
          @import "@styles/global.scss";
        `,
      },
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
