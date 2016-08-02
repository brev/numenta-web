import React from 'react'

import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const SectionPapers = (props, {config}) => {
  const {links} = config

  return (
    <div className={styles.columns}>
      <div className={styles.content}>

        <Paragraph lead={true}>
          Papers, videos, and other resources coming soon.
        </Paragraph>
        <TextLink to={links.in.bami}>
          Biological and Machine Intelligence (BaMI)
        </TextLink>

      </div>
      <div className={styles.aside}>

      </div>
    </div>
  )
}

SectionPapers.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionPapers
