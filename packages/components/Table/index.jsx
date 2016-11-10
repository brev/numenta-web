// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Table = ({border, children}) => {
  const classes = [styles.table]
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {border})
  )

  if (border) classes.push(styles.border)

  return (
    <table className={classNames(...classes)}>
      {childrenWithProps}
    </table>
  )
}

Table.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
}

Table.defaultProps = {
  border: false,
}

export default Table
