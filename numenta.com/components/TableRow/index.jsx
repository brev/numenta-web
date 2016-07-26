import React from 'react'

import styles from './style.css'


const TableRow = ({children}) => (
  <tr className={styles.tableRow}>
    {children}
  </tr>
)

TableRow.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default TableRow
