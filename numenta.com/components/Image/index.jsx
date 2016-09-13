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
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import styles from './index.css'


const Image = (props) => {
  const {
    alt, border, center, onClick, respond, round, shadow, src, title,
  } = props
  const classes = [styles.image]
  const prefix = prefixLink('')
  let source = src

  if (prefix && source && (source.indexOf(prefix) === -1)) {
    source = prefixLink(source)
  }

  if (border) classes.push(styles.border)
  if (center) classes.push(styles.center)
  if (respond) classes.push(styles[respond])
  if (round) classes.push(styles.round)
  if (shadow) classes.push(styles.shadow)

  return (
    <img
      alt={alt}
      className={classNames(...classes)}
      onClick={onClick}
      src={source}
      title={title}
    />
  )
}

Image.propTypes = {
  alt: React.PropTypes.string.isRequired,
  border: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  center: React.PropTypes.bool,
  respond: React.PropTypes.oneOf(['mw', 'w']),
  round: React.PropTypes.bool,
  shadow: React.PropTypes.bool,
  src: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
}

Image.defaultProps = {
  border: false,
  center: false,
  round: false,
  shadow: true,
}

export default Image
