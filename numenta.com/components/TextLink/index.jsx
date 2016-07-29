import {IndexLink, Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import styles from './index.css'


const TextLink = ({children, to}) => {
  const attrs = {
    // default internal non-index link
    className: styles.textlink,
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

TextLink.propTypes = {
  children: React.PropTypes.any.isRequired,
  to: React.PropTypes.string.isRequired,
}

export default TextLink
