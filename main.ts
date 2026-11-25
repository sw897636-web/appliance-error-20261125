import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final entry — washing machine, drain pump blocked by a sock.
// E24 is a real drain-fault code family. The missing sock's partner
// escaped to the dryer; the machine is left drowning in the laundry.
const ENTRY =
  "ERROR E24: Drain pump blocked by one sock. Its partner is in the dryer, dry and unbothered. I am drowning in your laundry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
