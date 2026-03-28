const { chromium } = require('playwright');
const path = require('path');

const BASE_URL = 'http://localhost:8082';
const OUT = 'squads/marketing-instagram/output/2026-03-27-140000/renders';

const slides = [
  { file: 'slide-01.html', out: `${OUT}/carrossel/slide-01.png`, w: 1080, h: 1440 },
  { file: 'slide-02.html', out: `${OUT}/carrossel/slide-02.png`, w: 1080, h: 1440 },
  { file: 'slide-03.html', out: `${OUT}/carrossel/slide-03.png`, w: 1080, h: 1440 },
  { file: 'slide-04.html', out: `${OUT}/carrossel/slide-04.png`, w: 1080, h: 1440 },
  { file: 'slide-05.html', out: `${OUT}/carrossel/slide-05.png`, w: 1080, h: 1440 },
  { file: 'slide-06.html', out: `${OUT}/carrossel/slide-06.png`, w: 1080, h: 1440 },
  { file: 'slide-07.html', out: `${OUT}/carrossel/slide-07.png`, w: 1080, h: 1440 },
  { file: 'slide-08.html', out: `${OUT}/carrossel/slide-08.png`, w: 1080, h: 1440 },
  { file: 'imagem-unica.html', out: `${OUT}/feed/imagem-unica.png`, w: 1080, h: 1080 },
  { file: 'story-01.html', out: `${OUT}/stories/story-01.png`, w: 1080, h: 1920 },
  { file: 'story-02.html', out: `${OUT}/stories/story-02.png`, w: 1080, h: 1920 },
  { file: 'story-03.html', out: `${OUT}/stories/story-03.png`, w: 1080, h: 1920 },
  { file: 'story-04.html', out: `${OUT}/stories/story-04.png`, w: 1080, h: 1920 },
  { file: 'story-05.html', out: `${OUT}/stories/story-05.png`, w: 1080, h: 1920 },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  for (const s of slides) {
    const page = await browser.newPage();
    await page.setViewportSize({ width: s.w, height: s.h });
    await page.goto(`${BASE_URL}/${s.file}`, { waitUntil: 'networkidle', timeout: 15000 });
    await page.screenshot({ path: s.out, clip: { x: 0, y: 0, width: s.w, height: s.h } });
    console.log(`✓ ${s.file}`);
    await page.close();
  }
  await browser.close();
  console.log('Done.');
})().catch(e => { console.error(e); process.exit(1); });
