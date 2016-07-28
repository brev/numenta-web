import React from 'react'

import Image from '../../components/Image'
import ImageLink from '../../components/ImageLink'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'

import ImageBenchmark from './images/benchmark.png'
import styles from './index.css'


/**
 *
 */
const SectionAnomaly = (props, {config}) => {
  const {links} = config

  return (
    <div className={styles.columns}>
      <div className={styles.content}>
        <Paragraph lead={true}>
          Sensors and data streams are proliferating as the Internet of
          Things vision becomes realized. However, using the data from these
          sensors is not so easy. Specifically, being able to identify
          anomalies in streaming data is surprisingly difficult. Most
          techniques are a form of thresholds, i.e. predetermined limits
          that must be set to notify abnormalities. However, thresholds have
          some glaring weaknesses, including often finding a problem after
          it has happened, not before, and not adapting to new states, such
          that false positives can crowd out the important signal.
        </Paragraph>
        <Paragraph>
          We created the <Strong>Numenta Anomaly Benchmark (NAB)</Strong> in
          order to be able to measure and compare results from algorithms
          designed to find anomalies in streaming data. NAB is an open
          source framework consisting of:
        </Paragraph>
        <List marker="disc">
          <ListItem>
            A dataset with 58 real-world, labeled data files
          </ListItem>
          <ListItem>
            A scoring mechanism that rewards early detection and
            on-line learning
          </ListItem>
        </List>

        <SubTitle level={3}>Resources</SubTitle>
        <List marker="disc">
          <ListItem>
            Business Paper: {' '}
            <TextLink to={links.out.nabBiz}>
              The Numenta Anomaly Benchmark
            </TextLink>
          </ListItem>
          <ListItem>
            Technical Peer-Reviewed Paper: {' '}
            <TextLink to={links.out.nabPaper}>
              Evaluating Real-time Anomaly Detection Algorithms – the
              Numenta Anomaly Benchmark
            </TextLink>
          </ListItem>
          <ListItem>
            <TextLink to={links.in.nab}>More Information</TextLink>
          </ListItem>
        </List>
      </div>
      <div className={styles.aside}>
        <ImageLink to={links.in.nab}>
          <Image
            alt="Numenta Anomaly Benchmark (NAB) screenshot"
            border={true}
            respond="mw"
            src={ImageBenchmark}
          />
        </ImageLink>
      </div>
    </div>
  )
}

SectionAnomaly.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionAnomaly
