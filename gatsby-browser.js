exports.onRouteUpdate = ({ location }) => {
  if (process.env.NODE_ENV !== `production`) {
    return
  }

  const path = location.pathname + location.search + location.hash
  const count = () => window.goatcounter.count({ path })

  if (window.goatcounter && window.goatcounter.count) {
    count()
  } else {
    // The first page view can fire before the async GoatCounter script loads
    const script = document.querySelector(`script[data-goatcounter]`)
    if (script) {
      script.addEventListener(`load`, count, { once: true })
    }
  }
}
