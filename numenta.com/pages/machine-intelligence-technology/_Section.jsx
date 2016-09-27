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

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'

import ImageVideoTech from './images/video-tech.png'
import styles from './index.css'


/**
 * Machine Intelligence Technology - main Section/Page React view component.
 */
const SectionTechnology = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        <Video
          image={ImageVideoTech}
          respond="mw"
          time="02:23"
          title="Intro to our Technology"
          type="youtube"
          videoId="v-VvFRar5TY"
        />
      </div>
      <article className={styles.content}>
        <Paragraph lead={true}>
          Based on a wealth of neuroscience evidence, our HTM technology is not
          just biologically inspired. It’s biologically constrained.  When
          applied to computers, HTM is well suited for prediction, anomaly
          detection, classification and ultimately sensori-motor applications.
          We believe this technology will be the foundation for the next wave of
          computing.
        </Paragraph>
        <Paragraph>
          At the core of HTM are learning algorithms that can store, learn,
          infer and recall high-order sequences. Unlike most other machine
          learning methods, HTM learns time-based patterns in unlabeled data on
          a continuous basis. HTM is robust to noise, and high capacity, meaning
          that it can learn multiple patterns simultaneously.
        </Paragraph>
        <Paragraph>
          HTM works best with data that meets the following characteristics:
        </Paragraph>
        <List marker="disc">
          <ListItem>
            Streaming data rather than batch data files
          </ListItem>
          <ListItem>
            Data with time-based patterns
          </ListItem>
          <ListItem>
            Many individual data sources where hand crafting separate models
            is impractical
          </ListItem>
          <ListItem>
            Subtle patterns that can’t always be seen by humans
          </ListItem>
          <ListItem>
            Data for which simple techniques such as thresholds yield
            substantial false positives and false negatives
          </ListItem>
        </List>
        <Paragraph>
          Our technology has been {' '}
          <TextLink to={links.in.applications}>
            tested and implemented in software,
          </TextLink> {' '}
          all of which is developed with best practices and suitable for
          deploying in commercial applications.
        </Paragraph>
      </article>
    </article>
  )
}

SectionTechnology.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionTechnology
