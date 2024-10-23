import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "dist",
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  shims: true,
  skipNodeModulesBundle: true,
  minify: true,
  clean: true,
});
