import React from 'react'

import styles from './index.css'


const Form = ({action, children, name, onSubmit}) => (
  <form
    acceptCharset="UTF-8"
    action={action}
    autoComplete="off"
    className={styles.form}
    encType="multipart/form-data"
    id={name}
    method="post"
    name={name}
    onSubmit={onSubmit}
  >
    {children}
  </form>
)

Form.propTypes = {
  action: React.PropTypes.string,
  children: React.PropTypes.any.isRequired,
  name: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
}

export default Form
