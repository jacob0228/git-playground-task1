#!/usr/bin/env node
// Lesson 1 check: confirms notes.md exists and isn't empty.
// It doesn't judge the content — a reviewer does that.

const fs = require("fs");
const path = require("path");

// Resolve notes.md relative to where the script is run (the repo root in CI).
const file = path.join(process.cwd(), "notes.md");

// Fail early if the file was never created.
if (!fs.existsSync(file)) {
  console.error("FAIL  notes.md is missing. Add it with your prediction and Claude's summary, then push again.");
  process.exit(1);
}

// The file exists but has no meaningful content (whitespace-only counts as empty).
if (fs.readFileSync(file, "utf8").trim().length === 0) {
  console.error("FAIL  notes.md is empty. Add your prediction and Claude's summary, then push again.");
  process.exit(1);
}

// Both checks passed: the file is present and non-empty.
console.log("PASS  notes.md is present and has content.");
