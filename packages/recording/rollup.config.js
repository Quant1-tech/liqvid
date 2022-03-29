import dts from "rollup-plugin-dts";

const external = ["@liqvid/utils/react", "react", "react/jsx-runtime.js"];

export default [
  // index
  {
    external,
    input: "dist/esm/index.js",

    output: [
      // ESM
      {file: "./dist/index.mjs", format: "esm"},
      // CJS
      {file: "./dist/index.cjs", format: "cjs"}
    ]
  },
  // types
  {
    input: "dist/types/index.d.ts",
    plugins: [dts()],
    output: {
      file: "dist/index.d.ts",
      format: "esm"
    }
  }
];