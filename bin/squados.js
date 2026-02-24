#!/usr/bin/env node

import { parseArgs } from 'node:util';
import { init } from '../src/init.js';

const { positionals } = parseArgs({
  allowPositionals: true,
  strict: false,
});

const command = positionals[0];

if (command === 'init') {
  await init(process.cwd());
} else {
  console.log(`
  squados-terminal — Multi-agent orchestration for Claude Code

  Usage:
    npx squados-terminal init    Initialize SquadOS in current directory

  Learn more: https://github.com/your-org/squados-terminal
  `);
  process.exit(command ? 1 : 0);
}
