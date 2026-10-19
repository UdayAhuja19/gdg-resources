# USER UNFRIENDLY: the look, as text

The rules for anything made for **USER UNFRIENDLY** (GDG on Campus UOBD × Computing Club, Tue 27 Oct 2026, 16:00–18:00, room 0411). Give this file to a designer or an AI assistant so what they make matches the posters. The live version, with every part working, is the brand sheet: https://udayahuja19.github.io/gdg-resources/user-unfriendly/

## The idea

**Best UI. Worst UX.** Teams build a website that looks great and is horrible to use. Everything we make for the event does the same: design it like it ships tomorrow (clean type, sharp layout, confident colour), then ruin the features, the buttons, forms, sliders, captchas and pop-ups people actually have to use.

**Ruin the features, never the facts.** The date, time, room and how to sign up always work and are easy to read.

The posters use four moves. Use one or two at a time, not all four:

1. **Features that fight back.** Buttons that lie, forms that never submit, pop-ups that won't close ("CANCEL (MEANS OK)"). Drawn as system windows.
2. **It's watching you.** Tracking boxes, cursor trails and crosshairs, as if the site were studying its user.
3. **Can't read it, can't use it.** Blur, pixelate or censor exactly what someone needs: a label, a button, the event's name.
4. **The facts always work.** The red slab with GOOD UI. BAD UX., the date, the time and the room. Never broken.

## Colour

Three flat colours. No gradients, tints, transparency or fourth colour.

| Name | Hex | Used for |
|---|---|---|
| Red | `#E5231B` | The event: slabs, backgrounds, tracking boxes, tags, icons |
| Ink | `#0D0D0D` | Type, title bars, outlines, every shadow |
| Paper | `#F2EEE6` | The field things sit on, windows, type on red or ink |

- Greys only appear where ink is blurred or pixelated (the launch poster's title).
- Shadows are hard, ink and offset down and right, with no blur. On an ink background they turn red.
- Contrast: ink on paper and paper on ink are 16.8:1 (any size). Paper on red is 4.0:1, ink on red and red on ink 4.2:1, red on paper 4.0:1: on screens those are for big type only (24px and up, or 19px bold). Small text goes on paper or ink, except the slab's one line of DM Mono, as on the posters.

## Type

Both fonts are free under the SIL Open Font License and are in `fonts/`.

| Role | Font | Settings |
|---|---|---|
| Title | Archivo 900 | Width 62%, capitals, line height 0.82, letter spacing −0.02em |
| Title, lowercase | Archivo 900 | Width 70%, letter spacing −0.045em; for blurred and tracked titles |
| Headline | Archivo 900 | Width 80%, line height 0.98 |
| Body | Archivo 600 | Width 95%, line height 1.3 |
| System | DM Mono 400 | Capitals, letter spacing 0.14em; labels, window titles, tags, small print |

Archivo is one variable file covering weights 100–900 and widths 62–125%.

**Two voices** on tags and labels:

- **The system:** DM Mono capitals, calm and precise: `RAGE CLICKS ×12`, `USER_014 · LOST 0.97`, `GAVE UP`, `× (DECORATIVE)`.
- **The user:** lowercase complaints in Archivo bold, typed in a panic with no punctuation: "i cant find the back button help", "the 2FA human captcha denied me".

## Parts

All in `user-unfriendly.css`, sized in em (set `font-size` on a part to scale it).

- **System window** `.uu-window`: paper body, ink title bar in DM Mono, red round "!" icon, hard ink shadow, buttons like NO / ALSO NO / CANCEL (MEANS OK).
- **Buttons** `.uu-btn` (paper), `--ink`, `--red`: capitals, thick ink border, hard shadow that presses in.
- **Tracking box** `.uu-track` with `.uu-track__tag` (system) or `--user`: a thin red box with a red tag on top. `.uu-cross` is a crosshair mark.
- **Key cap** `.uu-key`: a tilted paper key, e.g. "esc · DOES NOTHING".
- **Slab** `.uu-slab`: the red block with GOOD UI. BAD UX. and the facts in paper.
- **Agenda** `.uu-agenda`: the AGENDA.EXE panel with ticks, times and lengths.
- **Event app:** `.uu-card` (a dealt website or feature), `.uu-badge` (award badges, `aria-pressed`), `.uu-rate` (the judges' six blocks).

`user-unfriendly.js` draws the pixel effects on a `<canvas class="uu-pixels">`: `pixelText()` for a mosaic title (soft greys like the launch poster, or `crisp: true` for ink blocks) and `dither()` for the red pixel edge into a slab. Call `fontsReady()` first.

## Layout

- Poster 1200×1697, exported at 2× (2400×3394). Instagram post 1080×1350 (4:5). Story or reel cover 1080×1920 (9:16): keep the facts out of the top and bottom 250px.
- Margins 56px on a 1200-wide poster (about 4.7% of the width).
- Top strip in DM Mono capitals: "GDG on Campus UOBD × Computing Club" left, "Event 002" right.
- Bottom: the slab or an info strip, with the date and time big and one line of DM Mono with the room.

## Voice

The interface is the villain, never the person. Deadpan, short, polite and wrong in exactly the right place.

- Lines we've used: CANCEL (MEANS OK) · × (DECORATIVE) · TITLE HIDDEN FOR YOUR CONVENIENCE · LOADING A WEBSITE NOBODY CAN USE · STUCK SINCE TUESDAY · "If you can read the title, we designed it wrong." · "Are you sure you're sure?"
- The facts, plainly: Good UI. Bad UX. · Build a site that looks great and is horrible to use. · Tue 27 Oct · 16:00–18:00 · Room 0411 · Come as a team or find one here. AI allowed. No experience needed. Free.

**Do:** make every joke a broken feature; say "team" (it's a team event); put both clubs on everything; write USER UNFRIENDLY in capitals, or all lowercase in a blurred or tracked title.

**Don't:** break the date, time, room or sign-up link; make fun of real people or name a real product as the bad one; write "solo"; add a fourth colour, a gradient or a soft shadow.

## The approved posters (`posters/`)

Posted as a series, in this order:

1. `user-unfriendly-01-launch.png`: Nawfal's launch poster (1080×1350). Still says ROOM TBA.
2. `user-unfriendly-02-esc.png`: the blurred title and the useless esc key.
3. `user-unfriendly-03-tracked.png`: tracking boxes and a cursor trail over the title.
4. `user-unfriendly-04-error.png`: error windows, for the posts that explain what happens.
5. `user-unfriendly-05-agenda-red.png`: the agenda, title losing resolution.
6. `user-unfriendly-06-agenda-paper.png`: the agenda, title under a mosaic censor.

Wordmarks (transparent PNGs) are in `wordmarks/`: ink, paper and red on one line, ink and paper stacked, and a pixelated one on paper.
