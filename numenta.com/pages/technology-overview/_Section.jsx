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
  <div className={styles.columns}>
    <div className={styles.content}>
      <Paragraph lead={true}>
        Based on a wealth of neuroscience evidence we have created a
        technology called HTM (Hierarchical Temporal Memory) that models key
        aspects of neocortical learning. HTM is well suited for prediction,
        anomaly detection, classification and ultimately sensori-motor
        applications.
      </Paragraph>
      <Paragraph>
        At the core of HTM are time-based learning algorithms that can
        store, learn, infer and recall high-order sequences. Unlike most
        other machine learning methods, HTM learns time-based patterns in
        data on a continuous basis. HTM is extremely high capacity, meaning
        that it can learn multiple patterns simultaneously.  It is also
        robust to noise and can learn continuously from unlabeled data.
      </Paragraph>
      <Paragraph>
        HTM works best with data that meets the following characteristics:
      </Paragraph>
      <List marker="disc">
        <ListItem>
          Streaming data rather than batch data files
        </ListItem>
        <ListItem>
          Underlying patterns in the data that change over time
        </ListItem>
        <ListItem>
          Many individual data sources where hand crafting separate models
          is impractical
        </ListItem>
        <ListItem>
          Subtle patterns that can’t always be seen by humans
        </ListItem>
        <ListItem>
          Data with time-based patterns
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
    </div>
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
  </div>
)

export default SectionTechnology
