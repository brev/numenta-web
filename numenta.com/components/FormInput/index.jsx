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

import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const FormInput = ({name, onChange, placeholder, stretch, type, value}) => {
  const classes = [styles.formInput]

  if (stretch) classes.push(styles[stretch])

  return (
    <input
      className={classNames(...classes)}
      id={name}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
  )
}

FormInput.propTypes = {
  name: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string,
  stretch: React.PropTypes.oneOf(['small', 'medium', 'large']),
  type: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
}

FormInput.defaultProps = {
  stretch: 'large',
}

export default FormInput
