# GDG on Campus UOBD: Resources

Shared tools and brand files for the team, live at **https://udayahuja19.github.io/gdg-resources/**.

| Resource | Where | What it's for |
|---|---|---|
| Design system | [`design/`](design/index.html) | The brand rules shown live, with examples |
| DESIGN.md | [`design/DESIGN.md`](design/DESIGN.md) | The same rules as a text file for designers, projects and AI assistants |
| Starter page | [`design/starter.html`](design/starter.html) | A blank page already using the brand kit |
| Week planner | [`week-planner/`](week-planner/index.html) | Finds event times that suit the most students' class timetables |

## The brand kit

`kit/` is shared by every page: `css/tokens.css` (colours, type, spacing, motion), `css/base.css` (reset, graph paper, type scale), `css/components.css` (pills, buttons, cards and more), the Archivo font and the logo and shape SVGs. Copy the folder to use the brand in your own page.

## Updating things

- **Timetables:** edit `week-planner/timetables.js`. Each group lists its classes as `[day, startHour, endHour]`.
- **A new resource:** add a folder, then add a tile for it to `index.html`.
- Plain HTML, CSS and JS: no build step. Pushing to `main` redeploys GitHub Pages within a minute or two.

To preview locally, serve the folder over HTTP (the SVG sprites don't load from `file://`):

```bash
python3 -m http.server 8000
```
