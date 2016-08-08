import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Button = ({children, disabled, onClick, theme, type}) => {
  const classes = [styles.button, styles[theme]]

  if (disabled) classes.push(styles.disabled)

  return (
    <button
      className={classNames(...classes)}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: React.PropTypes.any.isRequired,
  disabled: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  theme: React.PropTypes.oneOf(['default', 'light', 'primary', 'short']),
  type: React.PropTypes.oneOf(['button', 'menu', 'reset', 'submit']),
}

Button.defaultProps = {
  disabled: false,
  theme: 'default',
  type: 'button',
}

export default Button
