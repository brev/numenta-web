import React from 'react'

import styles from './style.css'


const TableBody = ({children}) => (
  <tbody className={styles.tableBody}>
    {children}
  </tbody>
)

TableBody.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default TableBody
