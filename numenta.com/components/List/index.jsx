import React from 'react'

import styles from './style.css'


const List = ({children, marker}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {marker})
  )

  return (
    <ul className={styles.ul}>
      {childrenWithProps}
    </ul>
  )
}

List.propTypes = {
  children: React.PropTypes.any.isRequired,
  marker: React.PropTypes.oneOf(['circle', 'disc', 'icon', 'square']),
}

export default List
