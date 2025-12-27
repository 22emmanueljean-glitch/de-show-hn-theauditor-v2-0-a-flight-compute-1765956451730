/**
 * de-show-hn-theauditor-v2-0-a-flight-compute-1765956451730
 * Domain: utility
 * Problem: Transform input data
 * Feature: Read stdin and output JSON
 */

import fs from 'fs';

function readInput() {
  const arg = process.argv[2];
  if (arg) return arg;

  try {
    return fs.readFileSync(0, 'utf8').trim();
  } catch {
    return '';
  }
}

function transform(input) {
  return {
    original: input,
    length: input.length,
    upper: input.toUpperCase(),
    words: input.split(/\s+/).filter(Boolean).length,
    created_at: new Date().toISOString()
  };
}

const input = readInput();

if (!input) {
  console.error('No input provided');
  process.exit(1);
}

const output = transform(input);
console.log(JSON.stringify(output, null, 2));