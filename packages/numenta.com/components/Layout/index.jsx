// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Footer from 'numenta-web-shared-components/Footer'
import Header from 'numenta-web-shared-components/Header'
import Logo from 'numenta-web-shared-components/Logo'
import Main from 'numenta-web-shared-components/Main'
import TextLink from 'numenta-web-shared-components/TextLink'

import styles from './index.css'


/**
 * Site Layout wrapper - React view component.
 */
const Layout = ({children}, {config}) => {
  const {links} = config

  return (
    <div className={styles.layout}>
      <Header
        logo={
          <TextLink to={links.in.home}>
            <Logo />
          </TextLink>
        }
      />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  )
}

Layout.contextTypes = {
  config: React.PropTypes.object,
}

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Layout
