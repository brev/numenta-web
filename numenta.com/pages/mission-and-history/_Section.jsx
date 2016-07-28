import React from 'react'

import Anchor from '../../components/Anchor'
import Image from '../../components/Image'
import ListItem from '../../components/ListItem'
import ListOrder from '../../components/ListOrder'
import Paragraph from '../../components/Paragraph'
import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'

import ImageBrain from './images/brain.svg'
import ImageTimeline from './images/timeline.png'
import styles from './index.css'


/**
 *
 */
const SectionMission = (props, {config}) => {
  const {links} = config

  return (
    <div>
      <Anchor name="mission" />
      <SubTitle>Mission</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Numenta’s mission is to be a leader in the new era of machine
            intelligence.  We believe the brain is the best example of an
            intelligent system, providing a roadmap for building intelligent
            machines. The brain’s center of intelligence, the neocortex,
            controls a wide range of functions using a common set of
            principles. We have made significant progress discovering these
            principles and using them to create the Hierarchical Temporal
            Memory (HTM) learning algorithms.
          </Paragraph>
          <Paragraph>
            Because today’s computers are programmed, they can only do
            exactly as they are told. In stark contrast, intelligent
            machines continuously and automatically learn patterns in their
            environment without being programmed, enabling them to tackle
            problems in entirely new ways. Intelligent machines that learn
            and act will have an enormous beneficial impact in the coming
            decades.
          </Paragraph>
          <Paragraph>
            We have made significant progress in understanding the neocortex
            and building software based on those principles. We have
            demonstrated in multiple applications across many industries
            that the HTM learning algorithms can automatically model data
            streams, make predictions, find anomalies and classify results.
            We have a strong roadmap that continues to advance the
            technology, enabling broader uses over time. We remain committed
            to our open source project and encourage others to join us in
            building a community. From a commercial point of view, we {' '}
            <TextLink to={links.out.license}>
              license our technology and intellectual property.
            </TextLink>
          </Paragraph>
        </div>
        <div className={styles.aside}>
          <Image
            alt="Stylized Brain Artwork"
            respond="mw"
            shadow={false}
            src={ImageBrain}
          />
        </div>
      </div>

      <Anchor name="history" />
      <SubTitle>History</SubTitle>
      <Image
        alt="Numenta Historical Timeline"
        respond="mw"
        shadow={false}
        src={ImageTimeline}
      />
      <Paragraph>
        Numenta was established in 2005 in Redwood City, CA.  Our progress
        can be categorized by three distinct phases:
      </Paragraph>
      <ListOrder marker="decimal">
        <ListItem>
          <Strong>
            Testing the HTM theory and developing first generation
            algorithms.
          </Strong> {' '}
          During this phase, vision was a main application focus area.
        </ListItem>
        <ListItem>
          <Strong>
            Developing a second generation of HTM Learning algorithms with
            stronger biological correlation and a roadmap for future work.
          </Strong> {' '}
          During this phase, we continued to explore applications, built a
          prediction engine, and started our open source project.
        </ListItem>
        <ListItem>
          <Strong>
            Researching the third generation of HTM Learning algorithms.
          </Strong> {' '}
          We are currently focusing on sensorimotor integration.
        </ListItem>
      </ListOrder>
    </div>
  )
}

SectionMission.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionMission
