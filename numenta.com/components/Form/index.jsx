// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

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
  children: React.PropTypes.node.isRequired,
  name: React.PropTypes.string,
  onSubmit: React.PropTypes.func,
}

export default Form
