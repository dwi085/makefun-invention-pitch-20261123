// One-Sentence Absurd Invention Pitch
// Writes exactly one sentence pitching a ridiculous invention to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Deterministic: the same sentence every run. No network, no reads
// outside this script, exit 0. The sentence is one sentence, well
// under the 220-character gate limit.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "A self-hiding TV remote that dives between the sofa cushions the moment an advert starts, so you have to watch the whole thing instead of fleeing to the kitchen.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
