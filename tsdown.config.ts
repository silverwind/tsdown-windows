import {fileURLToPath} from "node:url";
import {platform} from "node:os";
import {type UserConfig} from "tsdown";

let entry = fileURLToPath(new URL("index.ts", import.meta.url));
if (platform() === "win32") {
  entry = entry.replaceAll("\\", "/"); // https://tsdown.dev/options/entry#using-glob-patterns
}

export default {
  entry,
} satisfies UserConfig;
