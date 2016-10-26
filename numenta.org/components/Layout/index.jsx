// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

import styles from './index.css'


const Layout = ({children}) => (
  <div className={styles.layout}>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </div>
)

Layout.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Layout
