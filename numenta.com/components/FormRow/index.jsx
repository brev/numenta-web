// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const FormRow = ({children}) => (
  <div className={styles.formRow}>
    {children}
  </div>
)

FormRow.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default FormRow
