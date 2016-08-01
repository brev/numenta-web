import React from 'react'

import styles from './index.css'


/**
 *
 */
const Subtle = ({children}) => (
  <span className={styles.subtle}>
    {children}
  </span>
)

Subtle.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Subtle
