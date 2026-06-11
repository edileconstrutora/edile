// Gera favicons / ícones / OG image a partir da marca EDILE.
// Fonte: public/brand/mark-white.png (símbolo branco) sobre fundo petrol-900.
// Rode com:  node scripts/gen-icons.mjs
import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const PETROL = "#122e39"; // --color-petrol-900 (base da marca)
const WHITE = "#ffffff";
const MARK = join(root, "public/brand/mark-white.png");

// Símbolo branco recortado (sem bordas transparentes), pronto para compor.
async function trimmedMark() {
  return sharp(MARK).trim().toBuffer();
}

// Compõe o símbolo centralizado num quadrado petrol com folga (padding).
async function squareIcon(size, markRatio = 0.6) {
  const mark = await trimmedMark();
  const box = Math.round(size * markRatio);
  const resized = await sharp(mark)
    .resize(box, box, { fit: "inside", withoutEnlargement: false })
    .toBuffer();
  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: PETROL,
    },
  })
    .composite([{ input: resized, gravity: "center" }])
    .png()
    .toBuffer();
}

// Monta um .ico multi-resolução com PNGs embutidos (suportado desde o Vista).
function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(images.length, 4);

  const entries = [];
  const blobs = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
    e.writeUInt8(size >= 256 ? 0 : size, 1); // height
    e.writeUInt8(0, 2); // palette
    e.writeUInt8(0, 3); // reserved
    e.writeUInt16LE(1, 4); // planes
    e.writeUInt16LE(32, 6); // bpp
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
    blobs.push(data);
  }
  return Buffer.concat([header, ...entries, ...blobs]);
}

// Logo completo (símbolo + wordmark) em branco — paths de components/ui/logo.tsx.
const LOGO_PATHS = `
<path d="M1749.68,1506.05c0,104.87-56.24,145.08-165.43,145.08h-149.74v-287.99h149.19c106.49,0,165.97,39.13,165.97,142.91ZM1492.68,1416.98v207.12h88.32c49.19,0,106.95-35.88,108.03-115.89,1.08-82.16-55.06-118.05-108.03-118.05h-97.64v11.35l9.31,15.46Z"/>
<path d="M1843.14,1363.14h58.17v287.99h-58.17v-287.99Z"/>
<path d="M2053.54,1612.75v11.35s251.94,0,251.94,0v27.03h-301.09v-287.99h58.41l-.38,234.15-8.88,15.46Z"/>
<path d="M2428.98,1480.37h127.03v26.49h-127.03v117.24h195.52v27.03h-253.81v-287.99h253.81v27.03h-195.52v90.21Z"/>
<path d="M1156.54,1480.37h127.03v26.49h-127.03v117.24h195.52v27.03h-253.81v-287.99h253.81v27.03h-195.52v90.21Z"/>
<path d="M566.7,1476.94l-21.66,41.37c-6.07,11.59-18.07,18.85-31.15,18.85h-138.39v75.69h92.39c16.33,0,31.21-9.37,38.27-24.1l16.21-33.85c6.95-14.51,21.61-23.74,37.7-23.74h284.35v-73.97h-252.67c-13.71,0-18.7,7.61-25.06,19.76Z"/>
<path d="M664.86,1308.89c-13.71,0-26.29,7.61-32.65,19.76l-21.66,41.37c-6.07,11.59-18.07,18.85-31.15,18.85h-203.9v70.03h167.95c16.33,0,31.21-9.37,38.27-24.1l16.21-33.85c6.95-14.51,21.61-23.74,37.7-23.74h208.79v-68.31h-179.57Z"/>
<path d="M844.43,1691.11v-79.98h-320.65c-13.71,0-26.29,7.61-32.65,19.76l-31.53,60.22h384.83Z"/>
`;

// OG image 1200x630: logo branco + tagline, sobre petrol.
async function ogImage() {
  const W = 1200;
  const H = 630;
  const logoW = 720;
  const logoH = (logoW * 400) / 2290; // mantém proporção do viewBox
  const lx = (W - logoW) / 2;
  const ly = 232;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="${PETROL}"/>
  <svg x="${lx}" y="${ly}" width="${logoW}" height="${logoH}" viewBox="350 1300 2290 400" fill="${WHITE}">
    ${LOGO_PATHS}
  </svg>
  <text x="${W / 2}" y="430" text-anchor="middle"
    font-family="Inter, Arial, sans-serif" font-size="30" letter-spacing="1"
    fill="#93b7c0">Responsabilidade com o seu amanhã</text>
  <text x="${W / 2}" y="476" text-anchor="middle"
    font-family="Inter, Arial, sans-serif" font-size="20" letter-spacing="3"
    fill="#6298a6">INCORPORADORA &#183; INDAIATUBA / SP</text>
</svg>`;
  return sharp(Buffer.from(svg)).png().toBuffer();
}

// ---- gera tudo ----
const icon512 = await squareIcon(512, 0.6);
writeFileSync(join(root, "app/icon.png"), icon512);

const apple = await squareIcon(180, 0.62);
writeFileSync(join(root, "app/apple-icon.png"), apple);

const ico = buildIco([
  { size: 16, data: await squareIcon(16, 0.74) },
  { size: 32, data: await squareIcon(32, 0.66) },
  { size: 48, data: await squareIcon(48, 0.62) },
]);
writeFileSync(join(root, "app/favicon.ico"), ico);

writeFileSync(join(root, "public/og.png"), await ogImage());

console.log("ok: icon.png, apple-icon.png, favicon.ico, public/og.png");
