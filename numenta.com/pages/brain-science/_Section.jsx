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

import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'

import ImageBrain from './images/brain.svg'
import styles from './index.css'


/**
 * Brain Science Section - React view component
 */
const SectionBrain = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.brain}>
            <Image
              alt="Stylized Brain Artwork"
              respond="mw"
              shadow={false}
              src={ImageBrain}
            />
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Reverse engineering the neocortex to figure out how the brain works
            is a problem that many people think cannot be solved. We disagree.
            Solving any scientific challenge is possible when you match
            empirical evidence with theory. Our team of researchers are
            constantly reading neuroscience papers and studies that focus on
            various aspects of the brain. While there is no shortage of
            neuroscientists that specialize in particular areas, Numenta takes
            the unique approach of looking across these studies and putting the
            pieces together to make a working theory of the neocortex.
          </Paragraph>
          <Paragraph>
            We call this theory {' '}
            <TextLink to={links.in.technology}>
              Hierarchical Temporal Memory, (HTM),
            </TextLink> {' '}
            a framework for both biological and machine intelligence. This
            framework applies to everything the neocortex does – from vision to
            language to motor and more.  Nothing is task-specific. Everything
            operates on the same universal algorithms.
          </Paragraph>
          <Paragraph>
            We document our theory in the form of {' '}
            <TextLink to={links.in.papers}>
              research papers
            </TextLink> {' '}
            and a living book called {' '}
            <TextLink to={links.in.bami}>
              BAMI (Biological and Machine Intelligence).
            </TextLink>
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionBrain.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionBrain
