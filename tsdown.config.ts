import {globSync} from "node:fs";
import {fileURLToPath} from "node:url";
import type {UserConfig} from "tsdown";

export default {
  entry: fileURLToPath(new URL("src/index.ts", import.meta.url)),
  fixedExtension: false,
} satisfies UserConfig;
