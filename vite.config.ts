import path from "path";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => {
  return {
    plugins: [
      react(),
      babel({ presets: [reactCompilerPreset()] }),
      tailwindcss(),
    ],

    base: command === "serve" ? "/" : "/react-golestan/",

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@css": path.resolve(__dirname, "src/css"),
      },
    },
  };
});