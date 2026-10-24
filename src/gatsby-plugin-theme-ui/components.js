import React from "react"
import Prism from "@theme-ui/prism"

// Highlight fenced code blocks; MDX passes the <code> element as the child of <pre>
const components = {
  pre: ({ children }) => <Prism {...children.props} />,
}

export default components
