import React from 'react'

import Anchor from '../../components/Anchor'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'


/**
 *
 */
const NabPage = (props, {config}) => {
  const {links} = config

  return (
    <div>
      <Section
        headline={true}
        open={true}
        title="Numenta Anomaly Benchmark (NAB)"
      >
        <SubTitle level={3}>
          The First Benchmark For Evaluating Anomaly Detection In Streaming Data
        </SubTitle>
        <Paragraph>
          The Internet of Things has produced a world that’s overflowing with
          streaming data. As these data sources continue to grow, so does the
          need for anomaly detection. Uncovering anomalies allows you to:
        </Paragraph>
        <List marker="disc">
          <ListItem>
            Detect potential machine failures
          </ListItem>
          <ListItem>
            Recognize changes in Twitter activity
          </ListItem>
          <ListItem>
            Identify unexpected traffic patterns
          </ListItem>
        </List>
        <Paragraph>
          There are different methods of anomaly detection in streaming data,
          but how do you measure their effectiveness? NAB is the first benchmark
          designed for time-series data that gives credit to finding anomalies
          earlier and adjusting to changed patterns.
        </Paragraph>
        <Video
          image="/assets/img/pages/numenta-anomaly-benchmark/video-nab.png"
          respond="mw"
          time="02:23"
          title="Numenta Anomaly Benchmark (NAB)"
          type="youtube"
          videoId="b0GS_Fbsvzw"
        />
        <div>
          VIDEO: Intro to the Numenta Anomaly Benchmark (NAB) (02:52)
        </div>

        <Anchor name="features" />
        <SubTitle>Features</SubTitle>
        <SubTitle level={3}>Real-World Dataset</SubTitle>
        <Paragraph>
          NAB contains a dataset with real-world, labeled data files across
          multiple domains. We’ve accumulated this valuable data from years of
          working with customers to address their anomaly problems.
        </Paragraph>
        <SubTitle level={3}>Scoring Mechanism</SubTitle>
        <Paragraph>
          We’ve developed a unique scoring function that rewards early
          detection, penalizes late or false results, and gives credit for
          on-line learning.
        </Paragraph>
        <SubTitle level={3}>OPEN SOURCE CODE LIBRARY</SubTitle>
        <p>
          NAB is a modular, open source code base.  Numenta will be working to
          build a community around NAB to add data files and test additional
          algorithms.
        </p>

        <Anchor name="resources" />
        <SubTitle>Resources</SubTitle>
        <SubTitle level={3}>
          Evaluating Real-Time Anomaly Detection:
          The Numenta Anomaly Benchmark
        </SubTitle>
        <Paragraph>
          Subutai Ahmad, VP Research presenting NAB and discussing the need for
          evaluating real-time anomaly detection algorithms. This presentation
          was delivered at MLConf (Machine Learning Conference) in San Francisco
          2015.
        </Paragraph>
        <div>
          {/* eslint-disable max-len */}
          <TextLink to="http://www.slideshare.net/numenta/evaluating-realtime-anomaly-detection-the-numenta-anomaly-benchmark">
            See Slides
          </TextLink>
          {/* eslint-enable max-len */}
        </div>
        <Video
          image="/assets/img/pages/numenta-anomaly-benchmark/video-mlconf.png"
          respond="mw"
          time="02:23"
          title="Real-time Anomaly Detection"
          type="youtube"
          videoId="SxtsCrTHz-4"
        />
        <div>
          VIDEO: Evaluating Real-Time Anomaly Detection (19:23)
        </div>
        <SubTitle level={3}>
          White Paper: The Numenta Anomaly Benchmark
        </SubTitle>
        <Paragraph>
          Why did we create this benchmark? Why is anomaly detection so hard in
          streaming data? This paper answers those questions and highlights how
          business managers can use NAB to ensure they’re getting valuable
          insights as early as possible.
        </Paragraph>
        {/* eslint-disable max-len */}
        <div>
          <TextLink to="http://numenta.com/assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf">
            Learn More
          </TextLink>
        </div>
        <TextLink to="http://numenta.com/assets/pdf/numenta-anomaly-benchmark/NAB-Business-Paper.pdf">
          @TODO Compare image here.
        </TextLink>
        {/* eslint-enable max-len */}
        <SubTitle level={3}>
            Research Paper: Evaluating Real-time Anomaly Detection Algorithms –
            the Numenta Anomaly Benchmark
        </SubTitle>
        <Paragraph>
          This peer-reviewed paper was accepted to the {' '}
          <TextLink to="http://www.icmla-conference.org/icmla15/">
            IEEE Conference on Machine Learning and Applications
          </TextLink> {' '}
          December 9-11, 2015 in Miami. It contains technical details on NAB,
          including the mathematical explanation of the scoring system.
        </Paragraph>
        <div>
          <TextLink to={links.in.nab}>
            Learn More
          </TextLink>
        </div>
        <TextLink to={links.in.nab}>
          @TODO Scoreboard image here.
        </TextLink>
        <SubTitle level={3}>NAB Repository</SubTitle>
        <Paragraph>
          This open source library contains all data files, algorithms and
          documentation. Use this repository to try NAB for yourself.  Test your
          own techniques against the published algorithms and share your
          results.
        </Paragraph>
        <div>
          <TextLink to="https://github.com/numenta/NAB">
            Learn More
          </TextLink>
        </div>
        <TextLink to="https://github.com/numenta/NAB">
          @TODO NAB GitHub image
        </TextLink>
        <SubTitle level={3}>
          Data Sheet: Numenta Anomaly Benchmark
        </SubTitle>
        <Paragraph>
          Download this two-page data sheet to learn more about the key
          components of NAB.
        </Paragraph>
        <div>
          {/* eslint-disable max-len */}
          <TextLink to="http://numenta.com/assets/pdf/numenta-anomaly-benchmark/NAB-Data-Sheet.pdf">
            Learn More
          </TextLink>
          {/* eslint-enable max-len */}
        </div>
        <TextLink to="/assets/pdf/numenta-anomaly-benchmark/NAB-Data-Sheet.pdf">
          @TODO Datasheet image
        </TextLink>

        <Anchor name="try" />
        <SubTitle>
          Try NAB for Yourself
        </SubTitle>
        <SubTitle level={3}>
          Try the Numenta Anomaly Benchmark
        </SubTitle>
        <Paragraph>
          We’ve made it easy for you to try NAB. {' '}
          <TextLink to="https://github.com/numenta/NAB">
            Visit the repository
          </TextLink> {' '}
          to test your own techniques and share your results. Use NAB to select
          the best algorithm for your specific application.
        </Paragraph>
        <SubTitle level={3}>
          Contribute Your Data
        </SubTitle>
        <Paragraph>
          We are committed to adding more real-world data files to our benchmark
          dataset. Do you have streaming data files with known anomalies?
          Contact us at {' '}
          <TextLink to="mailto:nab@numenta.org">nab@numenta.org</TextLink> {' '}
          to see if we can incorporate your data into a future version of NAB.
        </Paragraph>
        <div>
          @TODO Detail image
        </div>

      </Section>
    </div>
  )
}

NabPage.contextTypes = {
  config: React.PropTypes.object,
}

export default NabPage
