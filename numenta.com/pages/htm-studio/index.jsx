import classNames from 'classnames'
import IconBarChart from 'react-icons/lib/fa/bar-chart'
import IconBullseye from 'react-icons/lib/fa/bullseye'
import IconCubes from 'react-icons/lib/fa/cubes'
import IconFolder from 'react-icons/lib/fa/folder-open'
import IconLock from 'react-icons/lib/fa/lock'
import IconQuestion from 'react-icons/lib/fa/question-circle'
import React from 'react'

import Anchor from '../../components/Anchor'
import Button from '../../components/Button'
import ButtonLink from '../../components/ButtonLink'
import Form from '../../components/Form'
import FormCheckbox from '../../components/FormCheckbox'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import FormRow from '../../components/FormRow'
import FormTextArea from '../../components/FormTextArea'
import Image from '../../components/Image'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Strong from '../../components/Strong'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'

import ImageUse1 from './images/use1.png'
import ImageUse2 from './images/use2.png'
import ImageUse3 from './images/use3.png'
import ImageUse4 from './images/use4.png'
import ImageVideoDatasource from './images/video-datasource.png'
import ImageVideoDatetime from './images/video-datetime.png'
import ImageVideoIntro from './images/video-intro.png'
import ImageVideoWalkthru from './images/video-walkthru.png'
import styles from './index.css'

const sortFaqs = (a, b) => {
  if (a.data.sort > b.data.sort) return 1
  if (a.data.sort < b.data.sort) return -1
  return 0
}


/**
 *
 */
class HtmStudioPage extends React.Component {

  static contextTypes = {
    config: React.PropTypes.object,
    route: React.PropTypes.object,
  }

  state = {
    accepted: false,
    warning: false,
  }

  _startDownload() {
    const {accepted} = this.state

    if (!accepted) {
      this.setState({warning: true})
      return false
    }

    return true
  }

  _toggleAcceptance() {
    const {accepted} = this.state
    const newState = {accepted: !accepted}

    if (newState.accepted) {
      newState.warning = false
    }

    this.setState(newState)
  }

  render() {
    const {config, route} = this.context
    const {accepted, warning} = this.state
    const {links} = config
    const {pages} = route
    const warningClasses = [styles.row, styles.error]
    const faqs = pages.filter(({file}) => (
      (file.path.match(/^htm\-studio\/faq\/.*\.md/))
    ))
    const faq = faqs.sort(sortFaqs).map(({data, file}) => (
      <div key={file.stem}>
        <Anchor name={file.stem} />
        <Strong>
          {data.title}
        </Strong>
        <Paragraph>
          <span dangerouslySetInnerHTML={{__html: data.body}} />
        </Paragraph>
      </div>
    ))

    if (!warning) {
      warningClasses.push(styles.hide)
    }

    return (
      <div>
        <Section
          headline={true}
          open={true}
          title="HTM Studio"
        >
          <div className={styles.columns}>
            <div className={styles.content}>
              <div className={styles.tagline}>
                <SubTitle level={3}>
                    Find Real-Time Anomalies in your Streaming Data
                </SubTitle>
              </div>
              <Paragraph lead={true}>
                HTM Studio allows you to test whether our Hierarchical Temporal
                Memory (HTM) algorithms will find anomalies in your data. With
                just one click, you can uncover anomalies other techniques
                cannot find in your numeric, time-series data, in minutes.
              </Paragraph>
              <div className={styles.download}>
                <Form>
                  <div className={styles.row}>
                    <FormCheckbox
                      name="terms"
                      onClick={() => this._toggleAcceptance()}
                    />
                    <span className={styles.agree}>
                      I agree to the {' '}
                      <TextLink to={`${links.in.htmstudio}terms/`}>
                        Terms and Conditions
                      </TextLink>
                    </span>
                  </div>
                  <div className={classNames(...warningClasses)}>
                    Please agree to the {' '}
                    <TextLink to={`${links.in.htmstudio}terms/`}>
                      Terms and Conditions
                    </TextLink> {' '}
                    before downloading.
                  </div>
                  <div>
                    <ButtonLink
                      disabled={!accepted}
                      onClick={() => this._startDownload()}
                      theme="primary"
                      to={links.out.htmstudio.macos}
                    >
                      Download HTM Studio
                    </ButtonLink>
                  </div>
                </Form>
              </div>
              <div className={styles.notes}>
                <List copy={false} marker="disc">
                  <ListItem>
                    Available on Desktop only, for Mac OS/X and Windows (64 bit
                    versions).
                  </ListItem>
                  <ListItem>
                    Installation on Windows will take several minutes.
                  </ListItem>
                  <ListItem>
                    Windows 10 users, {' '}
                    <TextLink to={`${links.in.htmstudio}windows/`}>
                      click here
                    </TextLink> {' '}
                    for further information.
                  </ListItem>
                </List>
              </div>
            </div>
            <div className={styles.aside}>
              <Video
                image={ImageVideoIntro}
                respond="mw"
                time="01:37"
                title="HTM Studio Introduction"
                type="youtube"
                videoId="Nqoruj4eCb8"
              />
            </div>
          </div>

          <Anchor name="features" />
          <SubTitle>
            Features
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                No Coding Skills Required
              </SubTitle>
              <Paragraph>
                Skip the hassle of setting parameters. Discover anomalies with
                one click.
              </Paragraph>
            </div>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconBullseye />
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                Data Privacy
              </SubTitle>
              <Paragraph>
                Add local CSV (comma-separated value) files quickly with no
                upload or privacy issues.
              </Paragraph>
            </div>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconLock />
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                Run Simultaneous Models
              </SubTitle>
              <Paragraph>
                Run multiple data streams simultaneously and compare discovered
                anomalies.
              </Paragraph>
            </div>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconCubes />
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                Summarized Results
              </SubTitle>
              <Paragraph>
                Visualize and export your results.
              </Paragraph>
            </div>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconBarChart />
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                Pre-Loaded Datasets
              </SubTitle>
              <Paragraph>
                Don’t have your own data readily available? Experiment with our
                pre-loaded datasets, and see how HTM can be applied to a variety
                of use cases.
              </Paragraph>
            </div>
            <div className={classNames(styles.aside, styles.iconSmall)}>
              <IconFolder />
            </div>
          </div>

          <Anchor name="uses" />
          <SubTitle>
            Use Cases
          </SubTitle>
          <div className={classNames(styles.columns, styles.pad)}>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #1"
                respond="w"
                src={ImageUse1}
              />
              <SubTitle level={3}>
                Preventative Maintenance
              </SubTitle>
              <Paragraph>
                Monitor machine sensors to detect failures before they occur.
              </Paragraph>
            </div>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #2"
                respond="w"
                src={ImageUse2}
              />
              <SubTitle level={3}>
                IoT Sensors
              </SubTitle>
              <Paragraph>
                Understand energy usage and adjust resources in a connected
                building.
              </Paragraph>
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #3"
                respond="w"
                src={ImageUse3}
              />
              <SubTitle level={3}>
                Traffic Patterns
              </SubTitle>
              <Paragraph>
                Identify unusual patterns in direction or speed from a vehicle.
              </Paragraph>
            </div>
            <div className={styles.column}>
              <Image
                alt="HTM Studio use case #4"
                respond="w"
                src={ImageUse4}
              />
              <SubTitle level={3}>
                Network Servers
              </SubTitle>
              <Paragraph>
                Identify network changes and potential server degradation.
              </Paragraph>
            </div>
          </div>

          <Anchor name="start" />
          <SubTitle>
            Get Started
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.content}>
              <Paragraph>
                To get the full HTM Studio experience, watch our short
                walk-through video.
              </Paragraph>
              <Paragraph>
                Data imported into HTM Studio must be formatted to meet certain
                conditions. See requirements and watch our brief instructional
                videos to learn how to prepare your data.
              </Paragraph>
            </div>
            <div className={styles.aside}>
              <Video
                image={ImageVideoWalkthru}
                respond="mw"
                time="04:41"
                title="HTM Studio Walk-through"
                type="youtube"
                videoId="a2hshyznLEE"
              />
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                Isolating Data Sources
              </SubTitle>
              <Paragraph>
                CSV files must contain data that has only been generated from
                one source. If you have multiple sources, you will need to split
                your data by source and into separate CSV files.
              </Paragraph>
            </div>
            <div className={styles.aside}>
              <Video
                image={ImageVideoDatasource}
                respond="mw"
                time="02:47"
                title="Isolating Data Sources Tutorial"
                type="youtube"
                videoId="CRzWS52EdM0"
              />
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.content}>
              <SubTitle level={3}>
                Date/Time Format
              </SubTitle>
              <Paragraph>
                Data imported into HTM Studio must be in CSV file format and
                meet the following conditions:
              </Paragraph>
              <List marker="disc">
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
                  Values in numeric columns will be skipped if equal to:
                  <br />
                  "NaN", "None", "null", "N/A", "NA" (not case sensitive)
                </ListItem>
                <ListItem>
                  Any number of numeric columns
                </ListItem>
                <ListItem>
                  Data is listed in chronological order
                </ListItem>
                <ListItem>
                  Date/Time column must be in a {' '}
                  <TextLink to={`${links.in.htmstudio}date-time-formats/`}>
                    supported format
                  </TextLink>
                </ListItem>
                <ListItem>
                  Unix timestamp support (both milliseconds and seconds) as long
                  as the column name contains the words "time" or "date" (case
                  insensitive)
                </ListItem>
              </List>
            </div>
            <div className={styles.aside}>
              <Video
                image={ImageVideoDatetime}
                respond="mw"
                time="04:28"
                title="Date/Time Format Tutorial"
                type="youtube"
                videoId="f80ewxLvgks"
              />
            </div>
          </div>

          <Anchor name="faq" />
          <SubTitle>
            Frequently Asked Questions
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.content}>
              <div className={styles.faq}>
                {faq}
              </div>
            </div>
            <div className={classNames(styles.aside, styles.iconLarge)}>
              <IconQuestion />
            </div>
          </div>

          <Anchor name="resources" />
          <SubTitle>
            Resources
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.content}>
              <List marker="disc">
                <ListItem>
                  <TextLink
                    to="/assets/pdf/htm-studio/HTM-Studio-Data-Sheet.pdf"
                  >
                    HTM Studio Data Sheet
                  </TextLink>
                  <Paragraph>
                    Download this one-page data sheet to learn more about HTM
                    Studio.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  {/* eslint-disable max-len */}
                  <TextLink to="/papers-videos-and-more/learn/science-of-anomaly-detection/">
                    Science of Anomaly Detection Video
                  </TextLink>
                  {/* eslint-enable max-len */}
                  <Paragraph>
                    Learn about the science behind our HTM machine intelligence
                    algorithms in this educational video.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <TextLink to={`${links.in.htmstudio}terms/`}>
                    Terms and Conditions
                  </TextLink>
                  <Paragraph>
                    Terms and Conditions for HTM Studio.
                  </Paragraph>
                </ListItem>
                <ListItem>
                  <TextLink to={links.in.nab}>
                    Numenta Anomaly Benchmark (NAB)
                  </TextLink>
                  <Paragraph>
                    An open-source benchmark for evaluating anomaly detection in
                    streaming data.
                  </Paragraph>
                </ListItem>
              </List>
            </div>
          </div>

          <Anchor name="feedback" />
          <SubTitle>
            Feedback
          </SubTitle>
          <div className={styles.columns}>
            <div className={styles.content}>
              <Paragraph>
                Provide your feedback on HTM Studio via the form below,
                or email {' '}
                <TextLink to="mailto:htm-studio@numenta.com">
                  htm-studio@numenta.com
                </TextLink> {' '}
                for further information on HTM.
              </Paragraph>
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
          </div>
        </Section>
      </div>
    )
  }
}

export default HtmStudioPage
