import IconArrow from 'react-icons/lib/fa/caret-right'
import React from 'react'

import Strong from '../Strong'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 *
 */
const NextSection = ({title, url}) => (
  <div className={styles.nextSection}>
    <Strong>Next:</Strong> {' '}
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
