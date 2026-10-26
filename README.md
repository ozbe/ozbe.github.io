# ozbe.github.io

Personal site and blog, accessible at [ozbe.dev](https://ozbe.dev)

## Develop

Install the Node version in `.nvmrc` with [nvm](https://github.com/nvm-sh/nvm) and install dependencies:
```bash
$ nvm install
$ npm ci
```

Start the Astro development server:
```bash
$ npm run dev
```

Then open [http://localhost:4321/](http://localhost:4321/).

## Posts

Posts are MDX files in `content/posts`, either `<slug>.mdx` or `<slug>/index.mdx` with the post's images beside it. Each is served at `/<slug>/`.

## Publish

Every push builds the site with GitHub Actions. Pushes to the `gatsby` branch are also deployed to GitHub Pages.

## Apps

The home page lists the apps in `src/pages/index.astro`. Each app's site lives in its own `*-gh-pages` repo, is served from `*.ozbe.dev` and provides the `icon.png` shown in the grid.

## Troubleshooting

### Problem: I don't see my most recent changes

#### Possible Solution 1: Empty browser cache and hard reload

[How to hard refresh your browser Chrome, Firefox, Safari](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache)

#### Possible Solution 2: Clear the Astro cache

1. Stop the Astro server, if it is running
2. Delete the cache with `rm -rf .astro node_modules/.astro`
3. Restart whatever process or command you were using