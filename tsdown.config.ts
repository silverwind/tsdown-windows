import {fileURLToPath} from "node:url";
import {type UserConfig} from "tsdown";

export default {
  entry: fileURLToPath(new URL("index.ts", import.meta.url)),
} satisfies UserConfig;
