// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Image from '../../../components/Image'

import LogoMarkDark from './images/numenta-mark-dark.svg'
import LogoMarkLite from './images/numenta-mark-lite.svg'
import styles from './index.css'


/**
 * Logo Mark - React view component.
 */
const LogoMark = ({color}) => {
  const Marks = {
    dark: LogoMarkDark,
    lite: LogoMarkLite,
  }
  const Logo = Marks[color]

  return (
    <Image
      alt="Numenta Logo Mark"
      className={styles.mark}
      shadow={false}
      src={Logo}
      title="Numenta"
    />
  )
}

LogoMark.propTypes = {
  color: React.PropTypes.oneOf(['dark', 'lite']).isRequired,
}

LogoMark.defaultProps = {
  color: 'dark',
}

export default LogoMark
