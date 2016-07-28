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
  children: React.PropTypes.any.isRequired,
  copy: React.PropTypes.bool,
  marker: React.PropTypes.oneOf(['circle', 'disc', 'icon', 'square']),
}

List.defaultProps = {
  copy: true,
}

export default List
