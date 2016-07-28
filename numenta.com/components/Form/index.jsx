import React from 'react'

import styles from './index.css'


const Form = ({action, children, name}) => (
  <form
    acceptCharset="UTF-8"
    action={action}
    autoComplete="off"
    className={styles.form}
    encType="multipart/form-data"
    id={name}
    method="post"
    name={name}
  >
    {children}
  </form>
)

Form.propTypes = {
  action: React.PropTypes.string,
  children: React.PropTypes.any.isRequired,
  name: React.PropTypes.string,
}

export default Form
