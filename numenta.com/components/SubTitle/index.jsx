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
  children: React.PropTypes.any.isRequired,
  level: React.PropTypes.number,
}

SubTitle.defaultProps = {
  level: 2,
}

export default SubTitle
