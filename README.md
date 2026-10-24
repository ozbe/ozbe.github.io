# ozbe.github.io

Personal site and blog, accessible at [ozbe.dev](https://ozbe.dev)

## Develop

Install the Node version in `.nvmrc` with [nvm](https://github.com/nvm-sh/nvm) and install dependencies:
```bash
$ nvm install
$ npm ci
```

Start the Gatsby development server:
```bash
$ npm run develop
```

Then open [http://localhost:8000/](http://localhost:8000/).

## Publish

Every push builds the site with GitHub Actions. Pushes to the `gatsby` branch are also deployed to GitHub Pages.

## Apps

The home page lists the apps in `src/pages/index.js`. Each app's site lives in its own `*-gh-pages` repo, is served from `*.ozbe.dev` and provides the `icon.png` shown in the grid.

## Troubleshooting

### Problem: I don't see my most recent changes

#### Possible Solution 1: Empty browser cache and hard reload

[How to hard refresh your browser Chrome, Firefox, Safari](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache)

#### Possible Solution 2: Gatsby Clean

1. Stop the Gatsby server, if it is running
2. Clean the cache with `npm run clean`
3. Restart whatever process or command you were using