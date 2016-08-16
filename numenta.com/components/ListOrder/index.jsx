import React from 'react'

import styles from './index.css'


const ListOrder = ({children, copy, marker}) => {
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {copy, marker})
  )

  return (
    <ol className={styles.ol}>
      {childrenWithProps}
    </ol>
  )
}

ListOrder.propTypes = {
  children: React.PropTypes.any.isRequired,
  copy: React.PropTypes.bool,
  marker: React.PropTypes.oneOf(['decimal', 'disc']),
}

ListOrder.defaultProps = {
  copy: true,
}

export default ListOrder
