import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import styles from './style.css'


const TextLink = ({children, to}) => {
  const attrs = {
    className: styles.textlink,
    to: prefixLink(to),
  }
  let Node = Link  // default to internal link (react-router Link)

  // external link (browser location)
  if (to.match(/^.+:/)) {
    Node = 'a'
    attrs.href = to
    delete attrs.to
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
