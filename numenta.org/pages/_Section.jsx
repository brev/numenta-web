// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Paragraph from '../components/Paragraph'
import Strong from '../components/Strong'
import TextLink from '../components/TextLink'

import styles from './index.css'


/**
 *
 */
const SectionIndex = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        Aside
      </div>
      <div className={styles.content}>
        <Paragraph lead={true}>
          Numenta <Strong>HTM Community</Strong> is rad.
        </Paragraph>
        <Paragraph>
          Please visit Numenta company website at {' '}
          <TextLink to={links.out.com}>
            {links.out.com}.
          </TextLink>
        </Paragraph>
      </div>
    </article>
  )
}

SectionIndex.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionIndex
