import React from 'react'

import Image from '../Image'
import LogoMarkDark from './images/numenta-mark-dark.svg'
import LogoMarkLite from './images/numenta-mark-lite.svg'

import styles from './style.css'


/**
 *
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
