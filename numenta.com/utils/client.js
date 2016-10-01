// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

import browserSize from 'browser-size'
import url from 'url'

/**
 * Utils for the Clientside
 */


/**
 *
 */
export function getBrowserWidth() {
  const min = 640
  if (global.window) {
    const {width} = browserSize()
    return width || min
  }
  return min
}

/**
 *
 */
export function hasSessionStorage() {
  const {sessionStorage} = global.window
  const mod = '_'
  try {
    sessionStorage.setItem(mod, mod)
    sessionStorage.removeItem(mod)
    return true
  }
  catch (error) {
    return false
  }
}

/**
 *
 */
export function scrollToSection(element, pad = -60) {
  const {scroll, setTimeout} = global.window
  if (element && 'getBoundingClientRect' in element) {
    const {top} = element.getBoundingClientRect()
    if (top) {
      setTimeout(() => scroll(0, top + pad), 0)
    }
  }
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
