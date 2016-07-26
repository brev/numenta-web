import classNames from 'classnames'
import React from 'react'

import styles from './style.css'


const DefineTitle = ({children, direction}) => {
  const classes = [styles.defineTitle]

  if (direction) classes.push(styles[direction])

  return (
    <dt className={classNames(...classes)}>
      {children}
    </dt>
  )
}

DefineTitle.propTypes = {
  children: React.PropTypes.any.isRequired,
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
}

export default DefineTitle
