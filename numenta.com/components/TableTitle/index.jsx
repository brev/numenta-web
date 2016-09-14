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


/**
 *
 */
const TableTitle = ({border, children, colSpan}) => {
  const classes = [styles.tableTitle]

  if (border) classes.push(styles.border)

  return (
    <th className={classNames(...classes)} colSpan={colSpan}>
      {children}
    </th>
  )
}

TableTitle.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.node,
  colSpan: React.PropTypes.number.isRequired,
}

TableTitle.defaultProps = {
  colSpan: 1,
}

export default TableTitle
