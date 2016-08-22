import React from 'react'

import styles from './index.css'


/**
 *
 */
const Markdown = ({children}) => (
  <div className={styles.markdown}>
    {children}
  </div>
)

Markdown.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Markdown
