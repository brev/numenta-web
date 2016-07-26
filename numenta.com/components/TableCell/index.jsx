import React from 'react'

import styles from './style.css'


const TableCell = ({children, colSpan}) => (
  <td className={styles.tableCell} colSpan={colSpan}>
    {children}
  </td>
)

TableCell.propTypes = {
  children: React.PropTypes.any,
  colSpan: React.PropTypes.number.isRequired,
}

TableCell.defaultProps = {
  colSpan: 1,
}

export default TableCell
