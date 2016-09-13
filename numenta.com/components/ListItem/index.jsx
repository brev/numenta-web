// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

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
