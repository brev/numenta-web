// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/Image'

import logoFile from './images/numenta.svg'
import styles from './index.css'


/**
 * Site Logo image - React view component.
 */
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
