import React from 'react'

import styles from './index.css'


/**
 *
 */
const FormCheckbox = ({name, onClick}) => (
  <input
    className={styles.checkbox}
    id={name}
    name={name}
    onClick={onClick}
    type="checkbox"
  />
)

FormCheckbox.propTypes = {
  name: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func,
}

export default FormCheckbox
