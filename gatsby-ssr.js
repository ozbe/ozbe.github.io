const React = require(`react`)

exports.onRenderBody = ({ setPostBodyComponents }) => {
  if (process.env.NODE_ENV !== `production`) {
    return
  }

  // Page views are counted in gatsby-browser.js, including client-side navigation
  setPostBodyComponents([
    <script
      key="goatcounter"
      data-goatcounter="https://ozbe.goatcounter.com/count"
      data-goatcounter-settings='{"no_onload": true}'
      async
      src="https://gc.zgo.at/count.js"
    />,
  ])
}
