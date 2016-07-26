import classNames from 'classnames'
import React from 'react'

import styles from './style.css'

const markers = {
  circle: styles.markerCircle,
  decimal: styles.markerDecimal,
  disc: styles.markerDisc,
  icon: styles.markerIcon,
  square: styles.markerSquare,
}


/**
 *
 */
const ListItem = ({children, marker}) => {
  const classes = [styles.li]

  if (marker) {
    classes.push(markers[marker])
  }

  return (
    <li className={classNames(...classes)}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: React.PropTypes.any.isRequired,
  marker: React.PropTypes.oneOf(Object.keys(markers)),
}

export default ListItem
