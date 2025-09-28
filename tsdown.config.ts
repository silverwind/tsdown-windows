import {fileURLToPath} from "node:url";
import {type UserConfig} from "tsdown";

const entry = fileURLToPath(new URL("index.ts", import.meta.url));
console.info(entry);
console.info(JSON.stringify(entry));

export default {
  entry,
} satisfies UserConfig;
