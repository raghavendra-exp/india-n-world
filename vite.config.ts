import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes the build use relative asset paths, so it works
// out of the box at https://<user>.github.io/<any-repo-name>/
// with zero configuration, and also works with a custom domain.
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "dist",
  },
});
