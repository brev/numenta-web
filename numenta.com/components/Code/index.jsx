import React from 'react'

import styles from './index.css'


/**
 *
 */
const Code = ({children}) => (
  <code className={styles.code}>
    {children}
  </code>
)

Code.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Code
