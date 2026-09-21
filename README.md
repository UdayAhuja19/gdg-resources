# GDG on Campus UOBD: Resources

Shared tools and brand files for the team, live at **https://udayahuja19.github.io/gdg-resources/**.

| Resource | Where | What it's for |
|---|---|---|
| Design system | [`design/`](design/index.html) | The brand rules shown live, with examples |
| DESIGN.md | [`design/DESIGN.md`](design/DESIGN.md) | The same rules as a text file for designers, projects and AI assistants |
| Starter page | [`design/starter.html`](design/starter.html) | A blank page already using the brand kit |
| Socials | [`socials/`](socials/index.html) | The club's WhatsApp group, Instagram and LinkedIn on one phone page, with no links back into this site. Share this link; the QR code (`socials/GDG-UOBD-socials-QR.png`, `.svg`) points here |
| Club fair poster | [`poster/`](poster/index.html) | The A5 handout with what we do and the socials QR code. `poster/GDG-UOBD-club-fair-A5.pdf` is the file to print (100%, backgrounds on) |
| Week planner | [`week-planner/`](week-planner/index.html) | Finds event times that suit the most students' class timetables |
| Arcade | [gdg-arcade demo](https://udayahuja19.github.io/gdg-arcade/) | The single-player booth games (online scores stay on each device) |
| Party | [`party/`](party/index.html) | How to run the 4-player phone games (prototype) from a laptop through a Cloudflare tunnel |

## The brand kit

`kit/` is shared by every page: `css/tokens.css` (colours, type, spacing, motion), `css/base.css` (reset, graph paper, type scale), `css/components.css` (pills, buttons, cards and more), the Archivo font and the logo and shape SVGs. Copy the folder to use the brand in your own page.

## Updating things

- **Timetables:** edit `week-planner/timetables.js`. Each group lists its classes as `[day, startHour, endHour]`.
- **Socials:** the links are in `socials/index.html`. The QR code is made by `scripts/socials-qr.js` in the gdg-arcade repo; if the page ever moves, change `SOCIALS_URL` there and rerun it with this folder's `socials/` as the output.
- **A new resource:** add a folder, then add a tile for it to `index.html`.
- Plain HTML, CSS and JS: no build step. Pushing to `main` redeploys GitHub Pages within a minute or two.

To preview locally, serve the folder over HTTP (the SVG sprites don't load from `file://`):

```bash
python3 -m http.server 8000
```
