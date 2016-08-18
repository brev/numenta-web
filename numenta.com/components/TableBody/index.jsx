import React from 'react'

import styles from './index.css'


/**
 *
 */
const TableBody = ({border, children}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {border})
  )

  return (
    <tbody className={styles.tableBody}>
      {childrenWithProps}
    </tbody>
  )
}

TableBody.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.any.isRequired,
}

export default TableBody
