import classNames from 'classnames'
import React from 'react'

import styles from './index.css'


const Paragraph = ({children, lead}) => {
  const classes = [styles.paragraph]

  if (lead === true) classes.push(styles.lead)

  return (
    <p className={classNames(...classes)}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: React.PropTypes.any,
  lead: React.PropTypes.bool,
}

Paragraph.defaultProps = {
  lead: false,
}

export default Paragraph
