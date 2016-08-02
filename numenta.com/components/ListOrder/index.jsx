import React from 'react'

import styles from './index.css'


const ListOrder = ({children, marker}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {marker})
  )

  return (
    <ol className={styles.ol}>
      {childrenWithProps}
    </ol>
  )
}

ListOrder.propTypes = {
  children: React.PropTypes.any.isRequired,
  marker: React.PropTypes.oneOf(['decimal', 'disc']),
}

export default ListOrder
