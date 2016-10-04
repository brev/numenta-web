// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import ImageLink from '../ImageLink'
import Logo from '../Logo'
import Search from '../Search'

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
          <ImageLink to={links.in.home}>
            <Logo />
          </ImageLink>
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
