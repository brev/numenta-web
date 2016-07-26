import React from 'react'

import styles from './style.css'


const Table = ({children}) => (
  <table className={styles.table}>
    {children}
  </table>
)

Table.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Table
