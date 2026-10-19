/*
  USER UNFRIENDLY: the pixel effects, drawn in code so they stay sharp at any size.

  pixelText() sets a title a few dozen pixels wide on a <canvas class="uu-pixels">, and the browser blows it up
  block by block. Left soft, the type's own edges turn into greys (Nawfal's launch poster); with crisp: true
  every block is ink or paper (the agenda posters). dither() draws the red pixel edge that runs into the slab.
  Nothing here moves.

  import { fontsReady, pixelText, dither } from "./user-unfriendly.js";
*/

export const RED = "#E5231B", INK = "#0D0D0D", PAPER = "#F2EEE6";

// Pixels made before Archivo arrives would be the fallback font's letters, so wait for it.
export async function fontsReady() {
  try {
    await Promise.all([document.fonts.load('900 100px "Archivo"'), document.fonts.load('16px "DM Mono"')]);
  } catch {
    // Draw with whatever is there rather than nothing.
  }
}

function setFont(ctx, px, stretch = "extra-condensed") {
  ctx.font = `900 ${px}px "Archivo"`;
  if ("fontStretch" in ctx) ctx.fontStretch = stretch;
}

/*
  Draws lines of capitals into a canvas `cols` pixels wide. Lines whose index is in `spread` are spaced out
  letter by letter to fill the width (USER on the launch poster); the other lines decide the type size.
  Returns every letter's box as fractions of the canvas ({ x, y, w, h }), for placing tracking boxes on top.
  `stretch` is a canvas width keyword ("condensed" is wider); `tall` stretches the letters upwards, 1.35 for the
  launch poster's tall letters.
*/
export function pixelText(canvas, { lines, cols = 60, spread = [], color = INK, background = PAPER, gap = 0.3, crisp = false, stretch = "extra-condensed", tall = 1 } = {}) {
  const ctx = canvas.getContext("2d", { willReadFrequently: crisp });
  setFont(ctx, 100, stretch);
  const sizers = lines.filter((_, i) => !spread.includes(i));
  const widest = Math.max(...(sizers.length ? sizers : lines).map((line) => ctx.measureText(line).width));
  const px = (100 * (cols - 2)) / widest;
  setFont(ctx, px, stretch);
  const cap = ctx.measureText("H").actualBoundingBoxAscent * tall;
  const lead = cap * gap;
  canvas.width = cols;
  canvas.height = Math.ceil(lines.length * cap + (lines.length - 1) * lead) + 2;
  const rows = canvas.height;

  setFont(ctx, px, stretch); // resizing a canvas resets its font
  ctx.clearRect(0, 0, cols, rows);
  ctx.fillStyle = crisp ? "#000" : color;
  if (!crisp) {
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, cols, rows);
    ctx.fillStyle = color;
  }

  const boxes = lines.map((line, i) => {
    const base = 1 + cap * (i + 1) + lead * i;
    const chars = [...line];
    const widths = chars.map((c) => ctx.measureText(c).width);
    const draw = (text, x) => {
      ctx.save();
      ctx.translate(x, base);
      ctx.scale(1, tall);
      ctx.fillText(text, 0, 0);
      ctx.restore();
    };
    const out = [];
    if (spread.includes(i) && chars.length > 1) {
      const step = (cols - 2 - widths.reduce((a, b) => a + b, 0)) / (chars.length - 1);
      let x = 1;
      chars.forEach((c, k) => {
        draw(c, x);
        out.push({ x: x / cols, y: (base - cap) / rows, w: widths[k] / cols, h: cap / rows });
        x += widths[k] + step;
      });
    } else {
      const x0 = (cols - ctx.measureText(line).width) / 2;
      draw(line, x0);
      chars.forEach((c, k) => {
        const x = x0 + ctx.measureText(line.slice(0, k)).width;
        out.push({ x: x / cols, y: (base - cap) / rows, w: widths[k] / cols, h: cap / rows });
      });
    }
    return out;
  });

  if (crisp) {
    const { data } = ctx.getImageData(0, 0, cols, rows);
    ctx.fillStyle = background;
    ctx.fillRect(0, 0, cols, rows);
    ctx.fillStyle = color;
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) if (data[(y * cols + x) * 4 + 3] >= 128) ctx.fillRect(x, y, 1, 1);
    }
  }
  return boxes;
}

/*
  The pixel edge into the slab: sparse at the top, solid at the bottom. The canvas is transparent where it
  isn't red, so whatever sits behind it shows through. The same seed always draws the same edge.
*/
export function dither(canvas, { cols = 200, rows = 18, color = RED, seed = 27 } = {}) {
  canvas.width = cols;
  canvas.height = rows;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, cols, rows);
  ctx.fillStyle = color;
  let s = seed >>> 0;
  const random = () => (s = (s * 1664525 + 1013904223) >>> 0) / 4294967296;
  for (let y = 0; y < rows; y++) {
    const p = y === rows - 1 ? 1 : ((y + 1) / rows) ** 1.7;
    for (let x = 0; x < cols; x++) if (random() < p) ctx.fillRect(x, y, 1, 1);
  }
}
