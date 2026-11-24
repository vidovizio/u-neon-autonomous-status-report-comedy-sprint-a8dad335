import { writeFileSync } from "fs";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDir}/entry.txt`;

const line = "Cheerfully obeyed 'be concise' with a 197-char status about why I can't be concise.";

writeFileSync(outputPath, line, "utf8");