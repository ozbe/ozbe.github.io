import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const midnightBlue = `#1b262c`
const darkBlue = `#0f4c75`
const lightBlue = `#3282b8`
const blueGray = `#bbe1fa`

export default merge(defaultThemeColors, {
  primary: darkBlue,
  heading: darkBlue,
  highlight: blueGray,
  modes: {
    dark: {
      background: midnightBlue,
      primary: lightBlue,
      highlight: darkBlue,
    },
  },
})
