import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Worst Fix Ever: one commit message for a bug fix that made everything worse.
// Gate: entry.txt must be 1-100 chars of UTF-8; this line is 76 chars, no trailing newline.
const LINE =
  "fix: removed the bug by deleting the feature, the tests, and my will to live";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
