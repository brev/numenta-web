import React from 'react'

import styles from './index.css'


const TableRow = ({border, children}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {border})
  )

  return (
    <tr className={styles.tableRow}>
      {childrenWithProps}
    </tr>
  )
}

TableRow.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.any.isRequired,
}

export default TableRow
