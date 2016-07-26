import {Link} from 'react-router'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import styles from './style.css'


/**
 *
 */
const ImageLink = ({children, title, to}) => {
  const attrs = {
    className: styles.imagelink,
    title,
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

ImageLink.propTypes = {
  children: React.PropTypes.any.isRequired,
  title: React.PropTypes.string,
  to: React.PropTypes.string.isRequired,
}

export default ImageLink
