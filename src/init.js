import { cp, mkdir, readdir, stat } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEMPLATES_DIR = join(__dirname, '..', 'templates');

export async function init(targetDir) {
  console.log('\n  🟢 Initializing SquadOS...\n');

  // Check if already initialized
  try {
    await stat(join(targetDir, '_squados'));
    console.log('  ⚠️  SquadOS is already initialized in this directory.');
    console.log('  Use Claude Code and type /squados to get started.\n');
    return;
  } catch {
    // Not initialized yet — continue
  }

  // Copy template files
  await copyTemplates(targetDir);

  console.log('\n  ✅ SquadOS initialized successfully!\n');
  console.log('  Next steps:');
  console.log('  1. Open this directory in Claude Code');
  console.log('  2. Type /squados to start the onboarding wizard');
  console.log('  3. Follow the prompts to set up your company profile\n');
}

async function copyTemplates(targetDir) {
  const entries = await getTemplateEntries(TEMPLATES_DIR);

  for (const entry of entries) {
    const relativePath = entry.slice(TEMPLATES_DIR.length + 1);
    const destPath = join(targetDir, relativePath);

    const destDir = dirname(destPath);
    await mkdir(destDir, { recursive: true });

    await cp(entry, destPath);
    console.log(`  📄 Created ${relativePath}`);
  }
}

async function getTemplateEntries(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...await getTemplateEntries(fullPath));
    } else {
      results.push(fullPath);
    }
  }

  return results;
}
