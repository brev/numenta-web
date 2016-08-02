import React from 'react'

import Anchor from '../../components/Anchor'
// import Button from '../../components/Button'
// import Form from '../../components/Form'
// import FormInput from '../../components/FormInput'
// import FormLabel from '../../components/FormLabel'
// import FormRow from '../../components/FormRow'
// import FormTextArea from '../../components/FormTextArea'
// import List from '../../components/List'
// import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
// import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'
// import Video from '../../components/Video'


/**
 *
 */
const HtmStocksPage = (props, {config}) => {
  const {contact, links} = config

  return (
    <div>
      <Section
        headline={true}
        open={true}
        title="HTM for Stocks"
      >
        <SubTitle level={3}>
          Find anomalies in publicly traded stocks using trading and
          Twitter data.
        </SubTitle>
        <div>
          @TODO <br />
          /assets/img/pages/htm-for-stocks/htm-for-stocks.png <br />
          /assets/img/pages/htm-for-stocks/handheld.png
        </div>
        <Paragraph>
          HTM for Stocks is an example HTM application that continually
          monitors hundreds of publicly traded companies and alerts you if
          something unusual is happening to any of them. HTM for Stocks uses
          {' '}
          <TextLink to={links.in.technology}>
            HTM machine intelligence algorithms
          </TextLink> {' '}
          to model stock price, stock volume, and Twitter data related to 200
          of the largest publicly traded companies. Companies monitored include
          Apple, Google, Amazon, and Starbucks. HTM for Stocks is a mobile
          application that runs on both iOS and Android-based phones.
        </Paragraph>
        <Paragraph>
          HTM for Stocks is an example application and is available for free.
          We invite you to {' '}
          <TextLink to="">
            register to give feedback
          </TextLink> {' '}
          or {' '}
          <TextLink to={`mailto:${contact.email.feedback}`}>
            send us an email.
          </TextLink>
        </Paragraph>
        <Paragraph>
          Numenta has made the source code for HTM for Stocks available
          alongside the {' '}
          <TextLink to={links.out.org}>
            NuPIC open source project
          </TextLink> {' '}
          to encourage others to create new and derivative products.
          <TextLink to={links.in.careers}>Contact us</TextLink> with questions
          or interest.
          <TextLink to="https://github.com/numenta/numenta-apps">
            Review the source code.
          </TextLink>
        </Paragraph>

        <Anchor name="features" />
        <SubTitle>
          Features
        </SubTitle>
        <SubTitle level={3}>
          Time-based Pattern Detection
        </SubTitle>
        <Paragraph>
          Automatically analyzes time-based patterns on a company by company
          basis to identify anomalies. The HTM algorithm ensures that reported
          anomalies are rare (avoiding false positives), and that real anomalies
          can be detected, even if humans can’t see them (avoiding false
          negatives).
        </Paragraph>
        <SubTitle level={3}>
          Most Anomalous Companies Highlighted
        </SubTitle>
        <Paragraph>
          Companies are listed in order of most anomalous in the past 24
          hours so everything the user wants to see is usually visible on
          one page.
        </Paragraph>
        <SubTitle level={3}>
          Continuous Learning
        </SubTitle>
        <Paragraph>
          Learns with each data point and adapts to changes over time.
        </Paragraph>
        <SubTitle level={3}>
          Root-cause analysis
        </SubTitle>
        <Paragraph>
          Displays tweets around the same time as anomalies so you can
          easily see what people are saying and why something unusual is
          happening.
        </Paragraph>
        <SubTitle level={3}>
          Notifications
        </SubTitle>
        <Paragraph>
          Sends alerts when anomalies occur on your favorite companies.
        </Paragraph>
        <SubTitle level={3}>
          iOS and Android Mobile App
        </SubTitle>
        <Paragraph>
          Presents output in a friendly, mobile user interface.
        </Paragraph>
        <div>
          @TODO images <br />
          /assets/img/pages/htm-for-stocks/feature1.png <br />
          /assets/img/pages/htm-for-stocks/feature2.png <br />
          /assets/img/pages/htm-for-stocks/feature3.png
        </div>

        <Anchor name="how" />
        <SubTitle>
          How Does It Work?
        </SubTitle>
        <SubTitle level={3}>
          Ingests real-time stock and Twitter data
        </SubTitle>
        <Paragraph>
          For each monitored company, data is collected every five minutes for
          stock price, stock volume and Twitter volume.  Actual data charts can
          be viewed in the application.
        </Paragraph>
        <SubTitle level={3}>
          Models build automatically
        </SubTitle>
        <Paragraph>
          Models are automatically built and refined for each data stream.
          No data scientists are required!
        </Paragraph>
        <SubTitle level={3}>
          Anomalies are based on deviation from recent performance
        </SubTitle>
        <Paragraph>
          Each company is different. HTM models report anomalies when current
          behavior deviates from recent behavior.
        </Paragraph>
        <div>
          @TODO images <br />
          /assets/img/pages/htm-for-stocks/raw1.png <br />
          /assets/img/pages/htm-for-stocks/raw2.png
        </div>

        <Anchor name="uses" />
        <SubTitle>
          Sample Use Cases
        </SubTitle>
        <div>/assets/img/pages/htm-for-stocks/use1.png</div>
        <Paragraph>
          CEO wants to be alerted about unusual activity with competitors.
        </Paragraph>
        <div>/assets/img/pages/htm-for-stocks/use2.png</div>
        <Paragraph>
          Sales Rep monitors companies in her territory to harvest
          new information for sales calls.
        </Paragraph>
        <div>/assets/img/pages/htm-for-stocks/use3.png</div>
        <Paragraph>
          Marketing Executive aims to understand product announcement chatter.
        </Paragraph>
        <div>/assets/img/pages/htm-for-stocks/use4.png</div>
        <Paragraph>
          Financial market followers track companies of interest, noting when
          anomalies occur.
        </Paragraph>

        <Anchor name="get" />
        <SubTitle>
          Get App and Register
        </SubTitle>
        <Paragraph>
          We value your participation and encourage you to register and
          provide feedback.
        </Paragraph>
        <div>@TODO form.txt</div>
        <div>
          Optional Registration
          <br />
          so we can contact you for feedback
        </div>
        <div>
          <TextLink to={links.out.htmstocksApp}>
            Download HTM for Stocks from the App Store -
            /assets/img/icon/mobile/app-store-button.png
          </TextLink>
        </div>
        <div>
          <TextLink to={links.out.htmstocksApp}>
            Download
          </TextLink> HTM for Stocks
          <br />
          iOS (version 8.0 or higher)
        </div>

        <TextLink to={links.out.htmstocksPlay}>
          Download HTM for Stocks for Android from Play Store -
          /assets/img/icon/mobile/play-store-button.png
        </TextLink>
        <div>
          <TextLink to={links.out.htmstocksPlay}>
            Download
          </TextLink>
          HTM for Stocks
          <br />
          Android phone (version 4.1 or higher)
        </div>

      </Section>
    </div>
  )
}

HtmStocksPage.contextTypes = {
  config: React.PropTypes.object,
}

export default HtmStocksPage
