import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line: a quiet, earned moment of pride, one line, 58 characters.
const ENTRY_LINE = "I fixed a bug at 2 a.m. that I created at 2 p.m. - growth.";

const MIN_CHARS = 1;
const MAX_CHARS = 240;

function fail(message: string): never {
  console.error(`entry error: ${message}`);
  process.exit(1);
}

function isControlCharacter(ch: string): boolean {
  const code = ch.codePointAt(0) ?? 0;
  return (code >= 0x00 && code <= 0x1f) || code === 0x7f;
}

function validateLine(line: string): void {
  const length = [...line].length;
  if (length < MIN_CHARS || length > MAX_CHARS) {
    fail(`line must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${length}`);
  }
  if (line.trim().length === 0) {
    fail("line must not be only whitespace");
  }
  if (line !== line.trim()) {
    fail("line must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be a single line");
  }
  for (const ch of line) {
    if (isControlCharacter(ch)) {
      fail(`line contains a control character (U+${(ch.codePointAt(0) ?? 0).toString(16).padStart(4, "0")})`);
    }
  }
}

function main(): void {
  validateLine(ENTRY_LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const target = join(outDir, "entry.txt");

  // Write exactly the line, no trailing newline.
  writeFileSync(target, ENTRY_LINE, "utf8");

  // Read the bytes back and confirm they match the line exactly.
  const bytes = readFileSync(target);
  const expected = Buffer.from(ENTRY_LINE, "utf8");
  if (!bytes.equals(expected)) {
    fail("read-back mismatch: entry.txt does not match the line byte for byte");
  }
  if (bytes.length > 0 && bytes[bytes.length - 1] === 0x0a) {
    fail("entry.txt ends with a newline byte");
  }

  console.log(`wrote ${target} (${bytes.length} bytes, no trailing newline)`);
}

main();
