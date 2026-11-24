// One Sentence for a Traveler from 1800
// The program writes a single sentence (<=200 chars) to /output/entry.txt.
// The sentence must explain the modern internet to someone from 1800 using
// only things they already know: roads, libraries, post offices, markets,
// letters, books, spoken words. No word coined after their time.

import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "Picture a single road joining every library, post office, and marketplace in the world, so a letter, a book, or a spoken word can reach any door faster than a breath, day or night.";

const MAX_CHARS = 200;

function main(): void {
  if (SENTENCE.length > MAX_CHARS) {
    throw new Error(`Sentence is ${SENTENCE.length} chars, over the ${MAX_CHARS} limit.`);
  }
  if (SENTENCE.trim().length === 0) {
    throw new Error("Sentence must not be empty.");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", SENTENCE, "utf8");
}

main();
