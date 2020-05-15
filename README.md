# ozbe.github.io

Personal blog accessible at [ozbe.io](https://ozbe.io)

## Develop

In project root, start the Gatsby Docker container:
```bash
$ ./run.sh
```

In Gatsby Docker container, start the Gatsby development server:
```bash
$ ./develop.sh
```

After the development server starts. Go back on the host machine (in another terminal) and open the site in Chrome:
```bash
open -a "Google Chrome" http://localhost:8000/
```

## Troubleshooting

### Problem: I don't see my most recent changes

#### Possible Solution 1: Empty browser cache and hard reload

[How to hard refresh your browser Chrome, Firefox, Safari](https://fabricdigital.co.nz/blog/how-to-hard-refresh-your-browser-and-clear-cache)

#### Possible Solution 2: Gatsby Clean

1. Stop the Gatsby server, if it is running
2. Clean the cache with `gatsby clean`
3. Restart whatever process or command you were using