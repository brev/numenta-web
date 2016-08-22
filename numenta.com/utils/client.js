import browserSize from 'browser-size'
import url from 'url'

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

/**
 *
 */
export function triggerGAnalyticsEvent(href) {
  if (!href) return

  const {ga} = global.window
  const uri = url.parse(href)

  // g-analytics universal tracking (non-pageview)
  if (uri.protocol === 'mailto:') {
    // mailto links
    const email = uri.href.match(/^mailto:(.*?)$/)[1]
    ga('send', 'event', 'Mailto', email)
  }
  else if (uri.hostname === 'numenta.com' || !uri.hostname) {
    // internal asset links
    const ext = uri.pathname.split(/\./).pop()
    if (ext === 'pdf') {
      ga('send', 'event', 'Download', ext, uri.href)
    }
  }
  else {
    // external link
    ga('send', 'event', 'Outbound', uri.host, uri.path)
  }
}
