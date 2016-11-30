// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {scrollToSection} from '../utils/client'


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
