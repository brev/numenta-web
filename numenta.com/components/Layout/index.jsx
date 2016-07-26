import React from 'react'

import Footer from '../Footer'
import Header from '../Header'
import Main from '../Main'

import styles from './style.css'


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
  children: React.PropTypes.any.isRequired,
}

export default Layout
