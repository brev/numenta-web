import React from 'react'

import styles from './style.css'


const Strong = ({children}) => (
  <strong className={styles.strong}>
    {children}
  </strong>
)

Strong.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Strong
