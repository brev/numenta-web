// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Search from 'numenta-web-shared-components/Search'

import styles from './index.css'


/**
 * Site Static Header UI Bar - React view component.
 */
const Header = ({logo}) => (
  <div className={styles.appbar}>
    <header className={styles.header}>
      <div className={styles.logo}>
        {logo}
      </div>
      <div className={styles.search}>
        <Search />
      </div>
    </header>
  </div>
)

Header.propTypes = {
  logo: React.PropTypes.element.isRequired,
}

export default Header
