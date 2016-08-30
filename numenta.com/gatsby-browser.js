import {scrollToSection} from './utils/client'


/**
 *
 */
export function onRouteUpdate() {
  const {hash} = global.window.location

  // if url has #hash try to scroll to it
  if (hash !== '') {
    const id = hash.replace('#', '')
    const element = global.document.getElementById(id)
    scrollToSection(element)
  }
}
