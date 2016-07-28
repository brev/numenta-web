import React from 'react'

import Image from '../Image'

import logoFile from './images/numenta.svg'
import styles from './index.css'


const Logo = () => (
  <Image
    alt="Numenta Logo"
    className={styles.logo}
    shadow={false}
    src={logoFile}
    title="Numenta"
  />
)

export default Logo
