import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import path from "path";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";

const browserslistQuery = [
  ">= 0.25%",
  "last 2 versions",
  "not dead",
  "not op_mini all",
];

const targets = browserslistToTargets(
  browserslist(browserslistQuery, { env: "production" })
);

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.BASE_URL || "/",
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    transformer: "lightningcss",
    lightningcss: {
      targets,
      cssModules: {
        pattern: "[local]_[hash]",
      },
    },
  },
  build: {
    cssMinify: "lightningcss",
  },
});