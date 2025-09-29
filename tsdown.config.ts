import {globSync} from "node:fs";
import {type UserConfig} from "tsdown";

let entry = "src/*.ts";
console.info(`before glob: ${entry}`);
entry = globSync(entry);
console.info(`after glob: ${entry}`);

export default {
  entry,
} satisfies UserConfig;
