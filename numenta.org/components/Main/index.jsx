// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const Main = ({children}) => (
  <main className={styles.main}>
    {children}
  </main>
)

Main.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Main
