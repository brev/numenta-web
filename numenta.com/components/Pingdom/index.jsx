// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import {trims} from '../../utils/shared'


/**
 * Pingdom monitoring and analytics instrumentation.
 *  NOTE: Do not remove semi-colons from the JS code block below!
 */
const Pingdom = ({id}) => (
  <script
    dangerouslySetInnerHTML={{__html: trims`
      var _prum = [['id', '${id}'],
                   ['mark', 'firstbyte', (new Date()).getTime()]];
      (function() {
        var s = document.getElementsByTagName('script')[0],
            p = document.createElement('script');
        p.async = 'async';
        p.src = '//rum-static.pingdom.net/prum.min.js';
        s.parentNode.insertBefore(p, s);
      })();
    `}}
  />
)

Pingdom.propTypes = {
  id: React.PropTypes.string.isRequired,
}

export default Pingdom
