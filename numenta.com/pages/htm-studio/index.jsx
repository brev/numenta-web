import React from 'react'

import Anchor from '../../components/Anchor'
import Button from '../../components/Button'
import Form from '../../components/Form'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import FormRow from '../../components/FormRow'
import FormTextArea from '../../components/FormTextArea'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'


/**
 *
 */
const HtmStudioPage = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const faqs = pages.filter(({file}) => (
    (file.path.match(/^htm\-studio\/faq\/.*\.md/))
  ))
  const faq = faqs.sort().map(({data, file}) => (
    <ListItem key={file.stem}>
      <Strong>{data.title}</Strong>
      <Paragraph>
        <span dangerouslySetInnerHTML={{__html: data.body}} />
      </Paragraph>
    </ListItem>
  ))

  return (
    <div>
      <Section
        headline={true}
        open={true}
        title="HTM Studio"
      >
        <SubTitle>
          Find Real-Time Anomalies in your Streaming Data
        </SubTitle>
        <Video
          image="/assets/img/pages/htm-studio/video-intro.png"
          respond="mw"
          time="01:37"
          title="HTM Studio Introduction"
          type="youtube"
          videoId="Nqoruj4eCb8"
        />
        <div>
          VIDEO: HTM Studio Introduction (01:37)
        </div>
        <Paragraph>
          HTM Studio allows you to test whether our Hierarchical Temporal Memory
          (HTM) algorithms will find anomalies in your data. With just one
          click, you can uncover anomalies other techniques cannot find in your
          numeric, time-series data, in minutes.
        </Paragraph>
        <Form>
          <FormLabel>
            <input id="terms-accepted" type="checkbox" />
            I agree to the
            <TextLink to={`${links.in.htmstudio}terms/`}>
              Terms and Conditions
            </TextLink>
          </FormLabel>
          <Paragraph>
            Please agree to the {' '}
            <TextLink to={`${links.in.htmstudio}terms/`}>
              Terms and Conditions
            </TextLink> {' '}
            before downloading.
          </Paragraph>
          <TextLink to="">
            Download HTM Studio
          </TextLink>
          <Paragraph>
            Available on Desktop only, for Mac OS/X and Windows (64 bit
            versions).
            <br />
            Installation on Windows will take several minutes.
            <br />
            Windows 10 users, {' '}
            <TextLink to={`${links.in.htmstudio}windows/`}>click here</TextLink>
            {' '} for further information.
          </Paragraph>
        </Form>

        <Anchor name="features" />
        <SubTitle>
          Features
        </SubTitle>
        <SubTitle level={3}>
          No Coding Skills Required
        </SubTitle>
        <Paragraph>
          Skip the hassle of setting parameters. Discover anomalies with one
          click.
        </Paragraph>
        <SubTitle level={3}>
          Data Privacy
        </SubTitle>
        <Paragraph>
          Add local CSV (comma-separated value) files quickly with no upload or
          privacy issues.
        </Paragraph>
        <SubTitle level={3}>
          Run Simultaneous Models
        </SubTitle>
        <Paragraph>
          Run multiple data streams simultaneously and compare discovered
          anomalies.
        </Paragraph>
        <SubTitle level={3}>
          Run Simultaneous Models
        </SubTitle>
        <SubTitle level={3}>
          Summarized Results
        </SubTitle>
        <Paragraph>
          Visualize and export your results.
        </Paragraph>

        <Anchor name="uses" />
        <SubTitle>
          Use Cases
        </SubTitle>
        <Paragraph>
          Want to try HTM Studio but don’t have your own data readily available?
          Experiment with our pre-loaded datasets and see how HTM can be applied
          to a variety of use cases.
        </Paragraph>
        <SubTitle level={3}>
          Preventative Maintenance
        </SubTitle>
        <Paragraph>
          Monitor machine sensors to detect failures before they occur.
        </Paragraph>
        <div>
          @TODO image /assets/img/pages/htm-studio/use1.png
        </div>
        <SubTitle level={3}>
          IoT Sensors
        </SubTitle>
        <Paragraph>
          Understand energy usage and adjust resources in a connected building.
        </Paragraph>
        <div>
          @TODO image /assets/img/pages/htm-studio/use2.png
        </div>
        <SubTitle level={3}>
          Traffic Patterns
        </SubTitle>
        <Paragraph>
          Identify unusual patterns in direction or speed from a vehicle.
        </Paragraph>
        <div>
          @TODO image /assets/img/pages/htm-studio/use3.png
        </div>
        <SubTitle level={3}>
          Network Servers
        </SubTitle>
        <Paragraph>
          Identify network changes and potential server degradation.
        </Paragraph>
        <div>
          @TODO image /assets/img/pages/htm-studio/use4.png
        </div>

        <Anchor name="start" />
        <SubTitle>
          Get Started
        </SubTitle>
        <Paragraph>
          To get the full HTM Studio experience, watch our short walk-through
          video.
        </Paragraph>
        <Video
          image="/assets/img/pages/htm-studio/video-walkthru.png"
          respond="mw"
          time="04:41"
          title="HTM Studio Walk-through"
          type="youtube"
          videoId="a2hshyznLEE"
        />
        <div>
          VIDEO: HTM Studio Walk-Through (04:41)
        </div>
        <Paragraph>
          Data imported into HTM Studio must be formatted to meet certain
          conditions. See requirements and watch our brief instructional videos
          to learn how to prepare your data.
        </Paragraph>
        <SubTitle level={3}>
          Date/Time Format
        </SubTitle>
        <Paragraph>
          Data imported into HTM Studio must be in CSV file format and meet the
          following conditions:
        </Paragraph>
        <List>
          <ListItem>
            Only one Date/Time column
          </ListItem>
          <ListItem>
            Only one header row
          </ListItem>
          <ListItem>
            Number of rows in the CSV file should be minimum of 400.
          </ListItem>
          <ListItem>
            Values in numeric columns will be skipped if equal to "NaN",
            "None", "null", "N/A", "NA" (not case sensitive)
          </ListItem>
          <ListItem>
            Any number of numeric columns
          </ListItem>
          <ListItem>
            Data is listed in chronological order
          </ListItem>
          <ListItem>
            Date/Time column must be in a
            <TextLink to={`${links.in.htmstudio}date-time-formats/`}>
              supported format
            </TextLink>
          </ListItem>
          <ListItem>
            Unix timestamp support (both milliseconds and seconds) as long as
            the column name contains the words "time" or "date" (case
            insensitive)
          </ListItem>
        </List>
        <Video
          image="/assets/img/pages/htm-studio/video-datetime.png"
          respond="mw"
          time="04:28"
          title="HTM Studio Date/Time Format Tutorial"
          type="youtube"
          videoId="f80ewxLvgks"
        />
        <div>
          VIDEO: Date/Time Format Tutorial (04:28)
        </div>
        <SubTitle level={3}>
          Isolating Data Sources
        </SubTitle>
        <Paragraph>
          CSV files must contain data that has only been generated from one
          source. If you have multiple sources, you will need to split your data
          by source and into separate CSV files.
        </Paragraph>
        <Video
          image="/assets/img/pages/htm-studio/video-datasource.png"
          respond="mw"
          time="02:47"
          title="HTM Studio Isolating Data Sources Tutorial"
          type="youtube"
          videoId="CRzWS52EdM0"
        />
        <div>
          VIDEO: Isolating Data Sources Tutorial (02:47)
        </div>

        <Anchor name="faq" />
        <SubTitle>
          Frequently Asked Questions
        </SubTitle>
        <Paragraph>
          FAQ on HTM Studio and the underlying anomaly detection technology.
          Includes links to other documents for more detailed information.
        </Paragraph>
        <List>
          {faq}
        </List>

        <Anchor name="resources" />
        <SubTitle>
          Resources
        </SubTitle>
        <SubTitle level={4}>
          <TextLink to="/assets/pdf/htm-studio/HTM-Studio-Data-Sheet.pdf">
            HTM Studio Data Sheet
          </TextLink>
        </SubTitle>
        <Paragraph>
          Download this one-page data sheet to learn more about HTM Studio.
        </Paragraph>
        <SubTitle level={4}>
          <TextLink to="/learn/science-of-anomaly-detection.html">
            Science of Anomaly Detection Video
          </TextLink>
        </SubTitle>
        <Paragraph>
          Learn about the science behind our HTM machine intelligence algorithms
          in this educational video.
        </Paragraph>
        <SubTitle level={4}>
          <TextLink to={`${links.in.htmstudio}terms/`}>
            Terms and Conditions
          </TextLink>
        </SubTitle>
        <Paragraph>
          Terms and Conditions for HTM Studio.
        </Paragraph>
        <SubTitle level={4}>
          <TextLink to={links.in.nab}>
            Numenta Anomaly Benchmark (NAB)
          </TextLink>
        </SubTitle>
        <Paragraph>
          Numenta Anomaly Benchmark (NAB) is an open-source benchmark for
          evaluating anomaly detection in streaming data.
        </Paragraph>

        <SubTitle level={4}>
          Feedback
        </SubTitle>
        <Paragraph>
          Provide your feedback on HTM Studio via the form below, or email {' '}
          <TextLink to="mailto:htm-studio@numenta.com">
            htm-studio@numenta.com
          </TextLink> {' '}
          for further information on HTM.
        </Paragraph>
        <div>
          <Form
            action="https://numenta.wufoo.com/forms/z3mk1q016cylq6/#public"
            name="form17"
          >
            <FormRow>
              <FormLabel for="Field4">
                Name
              </FormLabel>
              <FormInput
                name="Field4"
                placeholder="First Lastname"
                type="text"
              />
            </FormRow>
            <FormRow>
              <FormLabel for="Field5">
                Email
              </FormLabel>
              <FormInput
                name="Field5"
                type="email"
                class="form-control"
                placeholder="name@company.com"
              />
            </FormRow>
            <FormRow>
              <FormLabel for="Field10">
                Feedback
              </FormLabel>
              <FormTextArea
                name="Field10"
                placeholder="Please enter your feedback here."
              />
            </FormRow>
            <FormRow>
              <FormLabel>&nbsp;</FormLabel>
              <Button theme="primary" type="submit">Submit</Button>
            </FormRow>
            <FormInput
              name="idstamp"
              type="hidden"
              value="8aHfSHvE01SmfTBSufr1bVy0Sz4OmbH39bFEqizTXs0="
            />
          </Form>
        </div>

      </Section>
    </div>
  )
}

HtmStudioPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default HtmStudioPage
