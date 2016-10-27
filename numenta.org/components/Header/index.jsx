// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Search from '../Search'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 *
 */
const Header = (props, {config}) => {
  const {links} = config

  return (
    <div className={styles.appbar}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <TextLink to={links.in.home}>
            Numenta.org
          </TextLink>
        </div>
        <div className={styles.search}>
          <Search />
        </div>
      </header>
    </div>
  )
}

Header.contextTypes = {
  config: React.PropTypes.object,
}

export default Header
