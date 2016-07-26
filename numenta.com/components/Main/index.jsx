import React from 'react'

import styles from './style.css'


const Main = ({children}) => (
  <main className={styles.main}>
    {children}
  </main>
)

Main.propTypes = {
  children: React.PropTypes.any.isRequired,
}

export default Main
