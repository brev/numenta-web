// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const TableHeader = ({border, children}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {border})
  )

  return (
    <thead className={styles.tableHeader}>
      {childrenWithProps}
    </thead>
  )
}

TableHeader.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.node.isRequired,
}

export default TableHeader
