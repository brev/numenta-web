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


const TableCell = ({border, children, colSpan}) => {
  const classes = [styles.tableCell]

  if (border) classes.push(styles.border)

  return (
    <td className={classNames(...classes)} colSpan={colSpan}>
      {children}
    </td>
  )
}

TableCell.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.any,
  colSpan: React.PropTypes.number.isRequired,
}

TableCell.defaultProps = {
  colSpan: 1,
}

export default TableCell
