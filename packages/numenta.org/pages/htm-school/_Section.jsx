// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Paragraph from '../../../components/Paragraph'
// import TextLink from '../../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const SectionSchool = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.video}>
            Aside
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            To help you learn about our theory and technology, we have organized
            educational content below. It is designed for anyone who wants to
            learn about HTM cortical theory and its applications for machine
            intelligence. {links.in.home}
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionSchool.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionSchool
