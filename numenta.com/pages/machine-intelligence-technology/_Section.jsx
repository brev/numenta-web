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
import Video from '../../components/Video'

import ImageVideoTech from './images/video-tech.png'
import styles from './index.css'


/**
 *
 */
const SectionTechnology = () => (
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
        Based on a wealth of neuroscience evidence we have created HTM
        (Hierarchical Temporal Memory), a theoretical framework for both
        biological and machine intelligence. When applied to computers, HTM is
        well suited for prediction, anomaly detection, classification and
        ultimately sensori-motor applications.
      </Paragraph>
      <Paragraph>
        At the core of HTM are learning algorithms that can store, learn, infer
        and recall high-order sequences. Unlike most other machine learning
        methods, HTM learns time-based patterns in unlabeled data on a
        continuous basis. HTM is robust to noise, and high capacity, meaning
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
        Our technology has been tested and implemented in software, all of
        which is developed with best practices and suitable for deploying in
        commercial applications.
      </Paragraph>
    </article>
  </article>
)

export default SectionTechnology
