import React from 'react'

import styles from './style.css'


const FormLabel = ({children, htmlFor}) => (
  <label className={styles.formLabel} htmlFor={htmlFor}>
    {children}
  </label>
)

FormLabel.propTypes = {
  children: React.PropTypes.any.isRequired,
  htmlFor: React.PropTypes.string,
}

export default FormLabel
