import React from "react"
import { Styled } from "theme-ui"

import Bio from "gatsby-theme-blog/src/components/bio"

/* eslint-disable react/jsx-pascal-case */
const Footer = ({ previous, next }) => (
  <footer>
    <Styled.hr />
    <Bio />
  </footer>
)
/* eslint-enable react/jsx-pascal-case */

export default Footer
