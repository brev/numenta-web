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
  children: React.PropTypes.any.isRequired,
}

export default TableHeader
