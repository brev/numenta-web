// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import {IndexLink, Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import {triggerGAnalyticsEvent} from '../../utils/client'

import styles from './index.css'


/**
 *
 */
const ImageLink = ({children, title, to}) => {
  const onClick = (event) => {
    // get focus off clicked image
    event.target.parentNode.blur()
    // send ga event for asset link/download
    return triggerGAnalyticsEvent(event.target.getAttribute('href'))
  }
  const attrs = {
    // default internal non-index link
    className: styles.imagelink,
    onClick,
    title,
    to: prefixLink(to),
  }
  let Node = Link

  if (to && to.match(/^.+:/)) {
    // external link (browser location)
    Node = 'a'
    attrs.href = to
    delete attrs.to
  }
  else if (to === '/') {
    // internal index main/home link
    Node = IndexLink
  }

  return (
    <Node {...attrs}>
      {children}
    </Node>
  )
}

ImageLink.propTypes = {
  children: React.PropTypes.node.isRequired,
  title: React.PropTypes.string,
  to: React.PropTypes.string.isRequired,
}

export default ImageLink
