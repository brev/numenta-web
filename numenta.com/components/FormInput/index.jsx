import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const FormInput = ({name, placeholder, stretch, type, value}) => {
  const classes = [styles.formInput]

  if (stretch) classes.push(styles[stretch])

  return (
    <input
      className={classNames(...classes)}
      id={name}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

FormInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string,
  stretch: React.PropTypes.oneOf(['small', 'medium', 'large']),
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
}

FormInput.defaultProps = {
  stretch: 'large',
}

export default FormInput
