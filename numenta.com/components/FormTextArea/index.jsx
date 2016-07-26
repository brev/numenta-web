import React from 'react'

import styles from './style.css'


const FormTextArea = ({children, name, placeholder}) => (
  <textarea
    className={styles.formTextArea}
    id={name}
    name={name}
    placeholder={placeholder}
  >
    {children}
  </textarea>
)

FormTextArea.propTypes = {
  children: React.PropTypes.any,
  name: React.PropTypes.string.isRequired,
  placeholder: React.PropTypes.string.isRequired,
}

export default FormTextArea
