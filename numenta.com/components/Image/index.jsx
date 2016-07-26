import classNames from 'classnames'
import React from 'react'

import styles from './style.css'


const Image = ({alt, border, onClick, respond, shadow, src, title}) => {
  const classes = [styles.image]

  if (border) classes.push(styles.border)
  if (respond) classes.push(styles[respond])
  if (shadow) classes.push(styles.shadow)

  return (
    <img
      alt={alt}
      className={classNames(...classes)}
      onClick={onClick}
      src={src}
      title={title}
    />
  )
}

Image.propTypes = {
  alt: React.PropTypes.string.isRequired,
  border: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  respond: React.PropTypes.oneOf(['mw', 'w']),
  shadow: React.PropTypes.bool,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
}

Image.defaultProps = {
  border: false,
  shadow: true,
}

export default Image
