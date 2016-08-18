import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Table = ({border, children}) => {
  const classes = [styles.table]
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {border})
  )

  if (border) classes.push(styles.border)

  return (
    <table className={classNames(...classes)}>
      {childrenWithProps}
    </table>
  )
}

Table.propTypes = {
  border: React.PropTypes.bool,
  children: React.PropTypes.any.isRequired,
}

Table.defaultProps = {
  border: false,
}

export default Table
