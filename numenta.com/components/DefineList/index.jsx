import classNames from 'classnames'
import React from 'react'

import styles from './style.css'


const DefineList = ({children, direction}) => {
  const classes = [styles.defineList, styles[direction]]
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {direction})
  )

  return (
    <dl className={classNames(...classes)}>
      {childrenWithProps}
    </dl>
  )
}

DefineList.propTypes = {
  children: React.PropTypes.any.isRequired,
  direction: React.PropTypes.oneOf(['horizontal', 'vertical']),
}

DefineList.defaultProps = {
  direction: 'vertical',
}

export default DefineList
