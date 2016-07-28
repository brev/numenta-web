import React from 'react'

import styles from './index.css'


const TableTitle = ({children, colSpan}) => (
  <th className={styles.tableTitle} colSpan={colSpan}>
    {children}
  </th>
)

TableTitle.propTypes = {
  children: React.PropTypes.any,
  colSpan: React.PropTypes.number.isRequired,
}

TableTitle.defaultProps = {
  colSpan: 1,
}

export default TableTitle
