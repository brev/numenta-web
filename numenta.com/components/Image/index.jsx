import classNames from 'classnames'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import styles from './index.css'


const Image = ({alt, border, onClick, respond, round, shadow, src, title}) => {
  const classes = [styles.image]
  const prefix = prefixLink('')
  let source = src

  if (prefix && source && !source.includes(prefix)) {
    source = prefixLink(source)
  }

  if (border) classes.push(styles.border)
  if (respond) classes.push(styles[respond])
  if (round) classes.push(styles.round)
  if (shadow) classes.push(styles.shadow)

  return (
    <img
      alt={alt}
      className={classNames(...classes)}
      onClick={onClick}
      src={source}
      title={title}
    />
  )
}

Image.propTypes = {
  alt: React.PropTypes.string.isRequired,
  border: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  respond: React.PropTypes.oneOf(['mw', 'w']),
  round: React.PropTypes.bool,
  shadow: React.PropTypes.bool,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
}

Image.defaultProps = {
  border: false,
  round: false,
  shadow: true,
}

export default Image
