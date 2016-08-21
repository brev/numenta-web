import browserSize from 'browser-size'

/**
 * Utils for the Clientside
 */


/**
 *
 */
export function getBrowserWidth() {
  if (global.window) {
    const {width} = browserSize()
    return width
  }
  return 640
}

/**
 *
 */
export function scrollToSection(current, pad = -60) {
  const element = global.document.getElementById(current.key)
  const {top} = element.getBoundingClientRect()
  if (top) global.window.scroll(0, top + pad)
}
