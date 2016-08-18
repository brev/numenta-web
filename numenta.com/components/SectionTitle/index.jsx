import classNames from 'classnames'
import IconAngleDown from 'react-icons/lib/fa/angle-down'
import IconAngleUp from 'react-icons/lib/fa/angle-up'
import React from 'react'

import Title from '../Title'

import styles from './index.css'


const SectionTitle = ({children, clickHandle, headline, open, title}) => {
  const isHeadline = headline === true
  const isOpen = open === true && !isHeadline
  const IconAngle = isOpen ? IconAngleUp : IconAngleDown
  const titleClasses = [styles.title]
  let sectionTitle = (<Title headline={headline}>{children}</Title>)

  if (!isHeadline) {
    if (isOpen) titleClasses.push(styles.open)

    sectionTitle = (
      <nav
        className={classNames(...titleClasses)}
        onClick={clickHandle}
        title={title}
      >
        <IconAngle className={styles.toggle} />
        {sectionTitle}
      </nav>
    )
  }

  return sectionTitle
}

SectionTitle.propTypes = {
  children: React.PropTypes.any.isRequired,
  clickHandle: React.PropTypes.func.isRequired,
  headline: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
}

SectionTitle.defaultProps = {
  headline: false,
}

export default SectionTitle
