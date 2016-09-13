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
