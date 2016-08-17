import React from 'react'

import Glance from '../components/Glance'
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
    <div className={styles.columns}>
      <div className={styles.aside}>
        <Glance />
      </div>
      <div className={styles.content}>
        <Paragraph lead={true}>
          <Strong>Numenta</Strong> is tackling one of the most
          important scientific challenges of all time: reverse engineering
          the neocortex. Studying how the brain works helps us understand
          the principles of intelligence and build machines that work on the
          same principles. We believe that understanding how the neocortex works
          is the fastest path to machine intelligence, and creating intelligent
          machines is important for the continued success of humankind.
        </Paragraph>
        <Paragraph>
          We are at the beginning of a thrilling new era of computing
          that will unfold over the coming decades, and we invite you to
          learn about how our approach is helping to advance the state of brain
          theory and machine intelligence.
        </Paragraph>
        <Paragraph>
          On this site, you’ll find information about our company. If
          you’re looking for technical resources, including details of our
          research, software implementations, and how to get started with
          our technology, visit our HTM open source community at {' '}
          <TextLink to={links.out.org}>{links.out.org}.</TextLink>
        </Paragraph>
      </div>
    </div>
  )
}

SectionIndex.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionIndex
