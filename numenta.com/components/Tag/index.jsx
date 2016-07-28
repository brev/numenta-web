import React from 'react'

import styles from './index.css'


const Tag = ({children}) => (
  <span className={styles.tag}>
    {children}
  </span>
)

Tag.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Tag
