/** @jsxImportSource theme-ui */
import { forwardRef } from "react"

const Comments = forwardRef((props, ref) => (
  <div>
    <h2 sx={{ variant: `styles.h2`, mb: 0 }}>Comments</h2>
    <div ref={ref} className="comments"></div>
  </div>
))

export default Comments
