# GDG on Campus UOBD: Design Rules

The rules behind our posts, written down so **anyone on the team** can make something that looks like us: an Instagram post, a slide deck, an event screen, a web page or a game.

- **Live design sheet:** [`design/index.html`](index.html) shows every rule with real examples.
- **Brand kit:** the `kit/` folder holds the CSS, font, logo and shapes. Web pages link it; Canva and Figma users copy the values below.

They come from the club's `<HIRING>` post. If a design choice isn't covered here, look at that post and ask: *would this sit next to it on our feed?*

---

## 1. The look in one line

**White graph paper, black ink, four flat Google colours, heavy capital letters in code brackets, and chunky sticker pills with hard shadows.**

## 2. Colour

| Name | Hex | Meaning when it carries information |
|---|---|---|
| Paper | `#FFFFFF` | Backgrounds and pill fills |
| Grid line | `#ECECEC` | 1px graph-paper lines on a 32px grid |
| Ink | `#111111` | Text, outlines, hard shadows |
| Muted | `#BDBDBD` | Placeholders, empty or disabled things |
| Yellow | `#FBBC04` | **Action**: the main button, 1st place, "selected" |
| Blue | `#4285F4` | **Info**: links, focus rings, 2nd place |
| Green | `#34A853` | **Good**: success, free, open, confirmed |
| Red | `#EA4335` | **Bad**: errors, busy, closed, 3rd place |

- **How much of each:** about 70% paper, 20% ink and 10% brand colour.
- Brand colours are **always flat**: no gradients, tints or transparency.
- **No more than 2 brand colours inside one component.** Spread the four across a page instead.
- When colour carries meaning (a status, a chart, a calendar), keep the meanings above, and never use colour alone. Add a word, a number or an icon too.
- Giving each item in a set its own colour is fine, and encouraged: one colour per team, per game or per track. Keep the mapping fixed everywhere it appears.

## 3. Background

Everything sits on white graph paper: 1px `#ECECEC` lines on a 32px grid. On slides and posts, scale the grid with the canvas (about 3% of the width per square).

## 4. Type

One typeface: **Archivo**. It's free on Google Fonts and built into Canva. Fallbacks: Helvetica Neue, Arial. **Headings, labels and buttons are in capitals.** Long body text (more than two lines) may be in sentence case to stay readable.

| Role | Weight | Letter spacing | Size (web) | Notes |
|---|---|---|---|---|
| Display | 900 Black | −4% | 64–180px | Line height 0.9. Always in code brackets: `<HIRING>` |
| Heading 1 | 900 Black | −4% | 40–72px | |
| Heading 2 | 800 ExtraBold | −2% | 26–36px | |
| Pill label | 700 Bold | +1% | 14–28px | |
| Body | 500 Medium | +2% | 14–16px | Max about 78 characters a line |
| Numbers | 900 Black | −2% | any | Tabular numbers so digits line up |

**For posts and slides**, keep the same ratios: the display heading is about 4× the body size and fills most of the width.

## 5. Components

**Sticker pill (our signature).** Fully rounded, white fill, **3px black outline** and a **hard 5px shadow straight down with no blur**.
- In decoration, tilt it anywhere from −14° to +12°.
- When people need to read or click it, keep it straight.
- Large pills use a 4px outline and a 7px shadow.
- A filled pill (yellow, blue, green, red or ink) marks a tag or status.

**Header pill.** A straight sticker pill that says `GOOGLE DEVELOPERS GROUP ON CAMPUS UOBD`, centred at the top. The bracket mark (`kit/assets/logo-mark.svg`) goes top-right.

**Thin pill.** 2px outline with no shadow, for secondary labels and scrolling marquees.

**Buttons**
- Primary: yellow fill + outline + hard shadow. One per screen.
- Secondary: a white sticker pill.
- Hover: lifts 2px and the shadow grows to 7px.
- Press: pushes down into its shadow (the shadow goes to 0).
- Keyboard focus: 3px blue outline, 4px away.
- Disabled: everything goes muted grey.

**Input.** A pill-shaped field with a 3px outline, bold capitals and a muted placeholder. On an error the outline turns red and a short red line appears underneath.

**Card.** 28px corners, 3px outline and a hard shadow. One brand shape may peek out from behind a corner. Everything inside a card stays straight. A flat card (no shadow) groups things without lifting them.

**Ranked list.** Pills with a 2px outline: a round badge in the rank colour, the name, and the number on the right. Empty slots are dashed and muted.

**Badge.** `NEW BEST!`, `SOLD OUT`, `+10`: a small tilted filled pill.

## 6. Shapes

Seven flat shapes (`kit/assets/shapes.svg`): triangle, flower, blob, capsule, bar, circle, half circle.

- Flat brand colour only, **never outlined**.
- Scatter 2–6 of them near the edges and let them overlap pill and card corners.
- Never put two shapes of the same colour side by side.
- Keep them out from behind text people need to read.

## 7. Layout

- Lots of white space and one big centred bracketed headline.
- A playful collage of tilted pills and shapes, usually at the top or bottom edge.
- Anything people need to use or read closely (forms, tables, calendars, scores, dates) stays straight and plain.

**Formats we use**

| Format | Size | Notes |
|---|---|---|
| Instagram post | 1080 × 1350 | Header pill top, headline in the upper third, collage along the bottom |
| Instagram story | 1080 × 1920 | Keep the top and bottom 250px free of text |
| Slides | 1920 × 1080 | One idea per slide. Headline top-left, not centred, after the title slide |
| Web page | any | Link the `kit/` CSS. Max content width 1280px, 16px side gutter on phones |

## 8. Motion

- **Spring easing:** `cubic-bezier(.34, 1.56, .64, 1)`. Fast = 150ms, default = 220ms.
- Buttons push down in 60ms and bounce back.
- Shapes drift slowly in 8–10s loops.
- If someone has reduced motion turned on, **everything stays still.**

## 9. Voice

Short, loud and friendly. Headings and actions go in code brackets. Buttons say exactly what happens next. Error messages say what to do.

| Say | Skip |
|---|---|
| `<REGISTER NOW>` | Click here |
| OPEN TO ALL MAJORS. NO CODING NEEDED. | We welcome participants from all academic backgrounds |
| `<SEE YOU THURSDAY 5 PM>` | Event details below |
| USE 2 TO 16 LETTERS OR NUMBERS. | Invalid input |

## 10. Don'ts

- No blurry drop shadows. Shadows are hard and point straight down.
- No gradients or see-through colours.
- No lowercase or light-weight headings.
- No thin or grey outlines on sticker pills.
- No more than 2 brand colours inside one component.
- No tilted inputs, tables, dates or numbers.
- No outlines on decorative shapes.
- No other typefaces, and no stock clip art or emoji as decoration.

---

## Using the kit

**On a web page**, copy the `kit/` folder next to your page and link it:

```html
<link rel="stylesheet" href="kit/css/tokens.css">
<link rel="stylesheet" href="kit/css/base.css">
<link rel="stylesheet" href="kit/css/components.css">
```

Then use the classes shown on the design sheet: `pill`, `pill--header`, `btn btn--primary`, `card`, `field`, `board`, `badge`, `shape shape--red`, `t-display bracketed`. `design/starter.html` is a blank page with all of this already wired up.

**In Canva or Figma**, set the font to Archivo, add the eight hex codes above as brand colours, and build pills as rounded rectangles (full corner radius) with a 3px black stroke and a black copy offset 5px straight down behind them. Export shapes from `kit/assets/shapes.svg`.

| File | What's in it |
|---|---|
| `kit/css/tokens.css` | Colour, type, spacing and motion variables, plus the bundled Archivo font |
| `kit/css/base.css` | Reset, graph paper and the type scale |
| `kit/css/components.css` | Pills, buttons, inputs, cards, ranked lists, badges, shapes, marquee |
| `kit/assets/logo-mark.svg` | The bracket mark |
| `kit/assets/shapes.svg` | The seven shapes as an SVG sprite |
| `kit/fonts/` | Archivo (SIL Open Font License) |
