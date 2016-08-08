/**
 * Main Section Utils for the Clientside
 */


/**
 *
 */
export function scrollTo(current, pad = -60) {
  const element = global.document.getElementById(current.type.name)
  const {top} = element.getBoundingClientRect()

  if (top) global.window.scroll(0, top + pad)
}
