/** @jsxImportSource theme-ui */
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => (
  <div sx={{ display: `flex`, mb: 4, alignItems: `center` }}>
    <StaticImage
      src="../../content/assets/avatar.png"
      alt="Josh Aaseby"
      layout="fixed"
      width={48}
      height={48}
      sx={{ mr: 2, minWidth: 48, borderRadius: 99999 }}
    />
    <div>
      Josh Aaseby
      <br />
      Software Engineer
    </div>
  </div>
)

export default Bio
