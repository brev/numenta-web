import {IndexLink, Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import {triggerGAnalyticsEvent} from '../../utils/client'

import styles from './index.css'


/**
 *
 */
const TextLink = ({children, onClick, target, to}) => {
  const instrumentOnClick = (event) => {
    // send ga event for asset link/download
    triggerGAnalyticsEvent(event.target.getAttribute('href'))
    if (onClick) return onClick(event)  // augment
    return true
  }
  const attrs = {
    // default internal non-index link
    className: styles.textlink,
    onClick: instrumentOnClick,
    target,
    to: prefixLink(to),
  }
  let Node = Link

  // Internal links get react-router Link component, external get A html tag
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

TextLink.propTypes = {
  children: React.PropTypes.any.isRequired,
  onClick: React.PropTypes.func,
  target: React.PropTypes.string,
  to: React.PropTypes.string.isRequired,
}

export default TextLink
