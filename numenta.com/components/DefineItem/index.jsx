import classNames from 'classnames'
import React from 'react'

import styles from './style.css'


const DefineItem = ({children, direction}) => {
  const classes = [styles.defineItem]

  if (direction) classes.push(styles[direction])

  return (
    <dd className={classNames(...classes)}>
      {children}
    </dd>
  )
}

DefineItem.propTypes = {
  children: React.PropTypes.any.isRequired,
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
}

export default DefineItem
