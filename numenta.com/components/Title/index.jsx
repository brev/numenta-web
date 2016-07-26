import React from 'react'

import styles from './style.css'


const Title = ({children, headline}) => {
  const isHeadline = headline === true
  const className = isHeadline ? styles.headline : styles.title

  return (
    <h1 className={className}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: React.PropTypes.any.isRequired,
  headline: React.PropTypes.bool.isRequired,
}

Title.defaultProps = {
  headline: false,
}

export default Title
