import IconArrowCircleRight from 'react-icons/lib/fa/arrow-circle-o-right'
import React from 'react'

import styles from './index.css'


const IconMarker = ({children, icon}) => (
  <span className={styles.iconMarker}>
    <span className={styles.icon}>
      {icon}
    </span>
    {children}
  </span>
)

IconMarker.propTypes = {
  children: React.PropTypes.any.isRequired,
  icon: React.PropTypes.element,
}

IconMarker.defaultProps = {
  icon: (<IconArrowCircleRight />),
}

export default IconMarker
