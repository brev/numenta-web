// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Anchor from '../../components/Anchor'
// import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
// import TextLink from '../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const SectionMission = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Anchor name="mission" />
      <SubTitle>Mission</SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          Aside
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Numenta’s mission is to be a leader in the new era of machine
            intelligence.  We believe the brain is the best example of an
            intelligent system, providing a roadmap for building intelligent
            machines. The brain’s center of intelligence, the neocortex,
            controls a wide range of functions using a common set of
            principles. {links.in.home}
          </Paragraph>
        </div>
      </div>

      <Anchor name="history" />
      <SubTitle>History</SubTitle>
      <Paragraph>
        Numenta was established in 2005 in Redwood City, CA.  Our progress
        can be categorized by three distinct phases:
      </Paragraph>
    </article>
  )
}

SectionMission.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionMission
