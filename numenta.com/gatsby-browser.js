// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import {scrollToSection} from '../utils/client'


/**
 * Gatsby event handler bridge to React-Router, fires every time URL changes
 *  within the clientside Single-Page-App mode.
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
