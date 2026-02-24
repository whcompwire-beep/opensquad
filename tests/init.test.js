import { describe, it, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm, stat, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { init } from '../src/init.js';

describe('squados-terminal init', () => {
  let tempDir;

  before(async () => {
    tempDir = await mkdtemp(join(tmpdir(), 'squados-test-'));
  });

  after(async () => {
    await rm(tempDir, { recursive: true, force: true });
  });

  it('creates _squados directory structure', async () => {
    await init(tempDir);

    await stat(join(tempDir, '_squados'));
    await stat(join(tempDir, '_squados', 'core'));
    await stat(join(tempDir, '_squados', 'core', 'architect.agent.yaml'));
    await stat(join(tempDir, '_squados', 'core', 'runner.pipeline.md'));
    await stat(join(tempDir, '_squados', '_memory'));
    await stat(join(tempDir, '.claude', 'skills', 'squados.md'));
    await stat(join(tempDir, 'CLAUDE.md'));
  });

  it('creates example squad', async () => {
    await stat(join(tempDir, 'squads', 'instagram-content', 'squad.yaml'));
    await stat(join(tempDir, 'squads', 'instagram-content', 'squad-party.csv'));
    await stat(join(tempDir, 'squads', 'instagram-content', 'agents'));
    await stat(join(tempDir, 'squads', 'instagram-content', 'pipeline', 'steps'));
  });

  it('does not overwrite if already initialized', async () => {
    await init(tempDir);
  });

  it('CLAUDE.md contains SquadOS instructions', async () => {
    const content = await readFile(join(tempDir, 'CLAUDE.md'), 'utf-8');
    assert.ok(content.includes('SquadOS'));
    assert.ok(content.includes('/squados'));
  });
});
