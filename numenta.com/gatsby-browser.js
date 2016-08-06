/**
 *
 */
export function onRouteUpdate() {
  const pad = -15
  const {hash} = global.window.location

  // if url has #hash try to scroll to it
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = global.document.getElementById(id)
      if (element && 'getBoundingClientRect' in element) {
        const {top} = element.getBoundingClientRect()
        if (top) global.window.scroll(0, top + pad)
      }
    }, 0)
  }
}
