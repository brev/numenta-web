import React from 'react'

import styles from './style.css'


const TableHeader = ({children}) => (
  <thead className={styles.tableHeader}>
    {children}
  </thead>
)

TableHeader.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default TableHeader
