import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Button = ({children, theme, type}) => {
  const classes = [styles.button, styles[theme]]

  return (
    <button className={classNames(...classes)} type={type}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: React.PropTypes.any.isRequired,
  theme: React.PropTypes.oneOf(['default', 'light', 'primary']),
  type: React.PropTypes.oneOf(['button', 'menu', 'reset', 'submit']),
}

Button.defaultProps = {
  theme: 'default',
  type: 'button',
}

export default Button
