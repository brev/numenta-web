// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const SubTitle = ({children, level}) => {
  const Heading = `h${level}`

  return (
    <Heading className={styles[Heading]}>
      {children}
    </Heading>
  )
}

SubTitle.propTypes = {
  children: React.PropTypes.node.isRequired,
  level: React.PropTypes.number,
}

SubTitle.defaultProps = {
  level: 2,
}

export default SubTitle
