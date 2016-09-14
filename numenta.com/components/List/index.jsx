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

import React from 'react'

import styles from './index.css'


const List = ({children, copy, marker}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {copy, marker})
  )

  return (
    <ul className={styles.ul}>
      {childrenWithProps}
    </ul>
  )
}

List.propTypes = {
  children: React.PropTypes.node.isRequired,
  copy: React.PropTypes.bool,
  marker: React.PropTypes.oneOf(['circle', 'disc', 'icon', 'square']),
}

List.defaultProps = {
  copy: true,
}

export default List
