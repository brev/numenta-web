// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

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
    <article className={styles.columns}>
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
          our technology, visit our {' '}
          <TextLink to={links.in.opensource}>
            open source community
          </TextLink> {' '}
          at {' '}
          <TextLink to={links.out.org}>
            {links.out.org}.
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
