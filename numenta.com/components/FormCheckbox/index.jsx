import React from 'react'

import styles from './index.css'


/**
 *
 */
const FormCheckbox = ({name}) => (
  <input
    className={styles.checkbox}
    id={name}
    name={name}
    type="checkbox"
  />
)

FormCheckbox.propTypes = {
  name: React.PropTypes.string.isRequired,
}

export default FormCheckbox
