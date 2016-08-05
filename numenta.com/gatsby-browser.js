/**
 *
 */
export function onRouteUpdate() {
  const {hash} = global.window.location

  // if url has #hash try to scroll to it
  if (hash !== '') {
    setTimeout(() => {
      const id = hash.replace('#', '')
      const element = global.document.getElementById(id)
      const {top} = element.getBoundingClientRect()
      if (top) global.window.scroll(0, top - 15)
    }, 0)
  }
}
