import classNames from 'classnames'
import React from 'react'

import styles from './index.css'

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
const ListItem = ({children, copy, marker}) => {
  const classes = [styles.li]

  if (copy) classes.push(styles.copy)
  if (marker) classes.push(markers[marker])

  return (
    <li className={classNames(...classes)}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: React.PropTypes.any.isRequired,
  copy: React.PropTypes.bool,
  marker: React.PropTypes.oneOf(Object.keys(markers)),
}

ListItem.defaultProps = {
  copy: true,
}

export default ListItem
