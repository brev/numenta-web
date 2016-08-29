import React from 'react'

import {trims} from '../../utils/shared'


/**
 *
 */
const Pingdom = ({id}) => (
  <script
    dangerouslySetInnerHTML={{__html: trims`
      var _prum = [['id', '${id}'],
                   ['mark', 'firstbyte', (new Date()).getTime()]]
      (function() {
        var s = document.getElementsByTagName('script')[0],
            p = document.createElement('script')
        p.async = 'async'
        p.src = '//rum-static.pingdom.net/prum.min.js'
        s.parentNode.insertBefore(p, s)
      })()
    `}}
  />
)

Pingdom.propTypes = {
  id: React.PropTypes.string.isRequired,
}

export default Pingdom
