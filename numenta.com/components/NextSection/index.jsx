import IconArrow from 'react-icons/lib/fa/caret-right'
import React from 'react'

import TextLink from '../TextLink'

import styles from './index.css'


/**
 *
 */
const NextSection = ({title, url}) => (
  <div className={styles.nextSection}>
    NEXT: {' '}
    <TextLink to={url}>
      {title} <IconArrow />
    </TextLink>
  </div>
)

NextSection.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
}

export default NextSection
