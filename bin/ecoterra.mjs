#!/usr/bin/env node

/**
 * EcoTERRA — Ecological Tools for Evidence-based Research, Reproducibility & Analysis
 *
 * CLI Installer
 *
 * Usage:
 *   npx ecoterra install                   # Install for Claude Code (default)
 *   npx ecoterra install --target cursor   # Install for Cursor
 *   npx ecoterra install --target all      # Install for all supported tools
 *   npx ecoterra init                      # Full project scaffold + method
 *   npx ecoterra clean                     # Remove generated adapter directories
 */

import { existsSync, mkdirSync, cpSync, rmSync, writeFileSync, readFileSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PKG_ROOT = join(__dirname, "..");
const CWD = process.cwd();

// Colors
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const bold = (s) => `\x1b[1m${s}\x1b[0m`;

function copyDirContents(src, dest) {
  if (!existsSync(src)) return 0;
  mkdirSync(dest, { recursive: true });
  const files = readdirSync(src).filter((f) => f.endsWith(".md"));
  for (const file of files) {
    cpSync(join(src, file), join(dest, file));
  }
  return files.length;
}

function installClaude() {
  console.log(green("\nInstalling Claude Code adapter..."));

  const claudeDir = join(CWD, ".claude");
  const ecoterraDir = join(PKG_ROOT, "ecoterra");

  const agents = copyDirContents(join(ecoterraDir, "agents"), join(claudeDir, "agents"));
  const skills = copyDirContents(join(ecoterraDir, "workflows"), join(claudeDir, "skills"));
  const rules = copyDirContents(join(ecoterraDir, "rules"), join(claudeDir, "rules"));
  mkdirSync(join(claudeDir, "hooks"), { recursive: true });

  // Copy CLAUDE.md to project root
  const claudeMd = join(PKG_ROOT, "CLAUDE.md");
  if (existsSync(claudeMd) && !existsSync(join(CWD, "CLAUDE.md"))) {
    cpSync(claudeMd, join(CWD, "CLAUDE.md"));
    console.log("  CLAUDE.md copied to project root");
  }

  console.log(`  Agents: ${agents} files`);
  console.log(`  Skills: ${skills} files`);
  console.log(`  Rules:  ${rules} files`);
  console.log(green("Claude Code adapter installed successfully.\n"));
}

function installCursor() {
  console.log(green("\nInstalling Cursor adapter..."));

  const cursorDir = join(CWD, ".cursor");
  const ecoterraDir = join(PKG_ROOT, "ecoterra");

  const rules = copyDirContents(join(ecoterraDir, "rules"), join(cursorDir, "rules"));

  // Generate .cursorrules from CLAUDE.md
  const claudeMd = join(PKG_ROOT, "CLAUDE.md");
  if (existsSync(claudeMd)) {
    cpSync(claudeMd, join(CWD, ".cursorrules"));
    console.log("  Generated .cursorrules from CLAUDE.md");
  }

  console.log(`  Rules: ${rules} files`);
  console.log(green("Cursor adapter installed successfully."));
  console.log(yellow("Note: Cursor does not natively support agents or skills. Rules have been installed.\n"));
}

function initProject() {
  console.log(bold("\nInitializing EcoTERRA project...\n"));

  // Create workspace directories
  const dirs = [
    "Data/raw",
    "Data/processed",
    "Data/environmental",
    "Scripts/R",
    "Scripts/Python",
    "Scripts/shell",
    "Paper",
    "Talks",
    "Figures",
    "Tables",
    "Models",
    "Supplementary",
    "Replication",
    "quality_reports",
    "explorations",
    "master_supporting_docs",
  ];

  for (const dir of dirs) {
    mkdirSync(join(CWD, dir), { recursive: true });
  }
  console.log(green(`  Created ${dirs.length} workspace directories`));

  // Copy ecoterra/ core method to project
  const ecoterraSrc = join(PKG_ROOT, "ecoterra");
  const ecoterrasDest = join(CWD, "ecoterra");
  if (existsSync(ecoterraSrc)) {
    cpSync(ecoterraSrc, ecoterrasDest, { recursive: true });
    console.log(green("  Copied ecoterra/ method to project"));
  }

  // Copy supporting files
  const filesToCopy = ["CLAUDE.md", ".gitignore", "README.md"];
  for (const file of filesToCopy) {
    const src = join(PKG_ROOT, file);
    const dest = join(CWD, file);
    if (existsSync(src) && !existsSync(dest)) {
      cpSync(src, dest);
      console.log(`  Copied ${file}`);
    }
  }

  // Create Bibliography_base.bib if it doesn't exist
  const bibFile = join(CWD, "Bibliography_base.bib");
  if (!existsSync(bibFile)) {
    writeFileSync(bibFile, "% EcoTERRA — Bibliography\n% Add your references here\n\n");
    console.log("  Created Bibliography_base.bib");
  }

  // Install Claude Code adapter by default
  installClaude();

  console.log(bold(green("EcoTERRA project initialized successfully!")));
  console.log(`\nNext steps:`);
  console.log(`  1. cd into your project directory`);
  console.log(`  2. Run ${bold("claude")} to start Claude Code`);
  console.log(`  3. Use ${bold("/new-project")} to configure your research project\n`);
}

function clean() {
  console.log(yellow("\nCleaning generated adapter directories..."));

  const toRemove = [".claude", ".cursor", ".cursorrules"];
  for (const item of toRemove) {
    const target = join(CWD, item);
    if (existsSync(target)) {
      rmSync(target, { recursive: true });
      console.log(`  Removed ${item}`);
    }
  }
  console.log(green("Clean complete.\n"));
}

// --- CLI Argument Parsing ---

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === "--help" || command === "-h") {
  console.log(`
${bold("EcoTERRA")} — Ecological Tools for Evidence-based Research, Reproducibility & Analysis

${bold("Usage:")}
  npx ecoterra install                    Install adapter for Claude Code (default)
  npx ecoterra install --target cursor    Install adapter for Cursor
  npx ecoterra install --target all       Install all adapters
  npx ecoterra init                       Full project scaffold + method + adapter
  npx ecoterra clean                      Remove generated adapter directories

${bold("Examples:")}
  # Start a new ecology research project
  mkdir my-sdm-study && cd my-sdm-study
  npx ecoterra init

  # Add EcoTERRA to an existing project
  cd existing-project
  npx ecoterra install
`);
  process.exit(0);
}

switch (command) {
  case "install": {
    const targetIdx = args.indexOf("--target");
    const target = targetIdx !== -1 ? args[targetIdx + 1] : "claude";

    switch (target) {
      case "claude":
        installClaude();
        break;
      case "cursor":
        installCursor();
        break;
      case "all":
        installClaude();
        installCursor();
        break;
      default:
        console.log(red(`Unknown target: ${target}. Use claude, cursor, or all.`));
        process.exit(1);
    }
    break;
  }
  case "init":
    initProject();
    break;
  case "clean":
    clean();
    break;
  default:
    console.log(red(`Unknown command: ${command}. Run 'npx ecoterra --help' for usage.`));
    process.exit(1);
}
