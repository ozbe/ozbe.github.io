/** @jsxImportSource theme-ui */
import Layout from "../components/layout"
import Seo from "../components/seo"
import Footer from "../components/footer"

const apps = [
  {
    name: `Jim`,
    url: `https://jim.ozbe.dev/`,
    description: `A simple weekly gym plan for people who'd like to be a bit stronger and don't have much time.`,
  },
  {
    name: `Outback`,
    url: `https://outback.ozbe.dev/`,
    description: `A small web browser for Apple Watch, with an iPhone companion for the pages you save.`,
  },
  {
    name: `Paper Shapes`,
    url: `https://papershapes.ozbe.dev/`,
    description: `Short, interactive stories for young children, starring Circle, Square, Triangle and Cross.`,
  },
  {
    name: `Relative Time`,
    url: `https://relativetime.ozbe.dev/`,
    description: `A world clock for the people and places you care about, with a map, a scrubber and widgets.`,
  },
  {
    name: `Vanilla`,
    url: `https://vanilla.ozbe.dev/`,
    description: `Save web pages and read them later in a clean reading mode, offline.`,
  },
]

const AppCard = ({ name, url, description }) => (
  <li>
    <a
      href={url}
      sx={{
        display: `block`,
        height: `100%`,
        p: 3,
        borderRadius: 8,
        color: `inherit`,
        textDecoration: `none`,
        "&:hover, &:focus": {
          bg: `muted`,
        },
      }}
    >
      <img
        src={`${url}icon.png`}
        alt=""
        width="64"
        height="64"
        sx={{ display: `block`, borderRadius: `22%`, mb: 2 }}
      />
      <span sx={{ display: `block`, fontWeight: `bold`, color: `primary` }}>
        {name}
      </span>
      <span sx={{ display: `block`, fontSize: 1, lineHeight: 1.4 }}>
        {description}
      </span>
    </a>
  </li>
)

const Apps = ({ location }) => (
  <Layout location={location}>
    <main>
      <h2 sx={{ variant: `styles.h2`, mt: 0 }}>Apps</h2>
      <ul
        sx={{
          listStyle: `none`,
          p: 0,
          m: 0,
          mx: -3,
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fill, minmax(180px, 1fr))`,
          gap: 2,
        }}
      >
        {apps.map(app => (
          <AppCard key={app.url} {...app} />
        ))}
      </ul>
    </main>
    <Footer />
  </Layout>
)

export default Apps

export const Head = () => (
  <Seo title="Apps" description="Apps made by Josh Aaseby." />
)
