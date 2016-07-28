import React from 'react'

import styles from './index.css'


const FormRow = ({children}) => (
  <div className={styles.formRow}>
    {children}
  </div>
)

FormRow.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default FormRow
