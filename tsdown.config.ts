import {fileURLToPath} from "node:url";
import {globSync} from "node:fs";
import {type UserConfig} from "tsdown";

let entry = fileURLToPath(new URL("index.ts", import.meta.url));
console.info(`before glob: ${entry}`);
entry = globSync(entry);
console.info(`after glob: ${entry}`);

export default {
  entry,
} satisfies UserConfig;
