# brynjar

Personal site — a virtual corkboard of snippets and pieces of things I'm interested in.

## Structure

- `public/` — pure static site (deployed as-is, no build step)
  - `index.html` — corkboard homepage
  - `projects/` — individual project pages
  - `css/style.css` — theme tokens in `:root`
  - `js/main.js` — vanilla JS
- `netlify.toml` — Netlify publish dir configured to `public`

## Local dev

```sh
cd public && python3 -m http.server
```

## Re-theming

Edit the CSS custom properties at the top of `public/css/style.css` (`--color-bg`, `--color-text`, `--color-accent`, ...).