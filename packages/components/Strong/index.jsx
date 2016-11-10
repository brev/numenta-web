// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const Strong = ({children}) => (
  <strong className={styles.strong}>
    {children}
  </strong>
)

Strong.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Strong
