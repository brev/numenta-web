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
  children: React.PropTypes.any.isRequired,
  moment: React.PropTypes.object,
}

export default Time
