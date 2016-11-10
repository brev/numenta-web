// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


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
  children: React.PropTypes.node.isRequired,
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
}

export default DefineTitle
