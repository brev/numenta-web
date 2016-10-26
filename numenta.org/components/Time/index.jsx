// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


/**
 *
 */
const Time = ({children, moment}) => (
  <time className={styles.time} dateTime={moment.format()}>
    {children}
  </time>
)

Time.propTypes = {
  children: React.PropTypes.node.isRequired,
  moment: React.PropTypes.object,
}

export default Time
