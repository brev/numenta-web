import React from 'react'

import Anchor from '../../components/Anchor'
import Image from '../../components/Image'
import ImageLink from '../../components/ImageLink'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import SubTitle from '../../components/SubTitle'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'

import ImageHtmStocks from './images/htm-for-stocks.png'
import ImageHtmStudio from './images/htm-studio.png'
import ImageGeo from './images/geo.png'
import ImageGrokIt from './images/grok.png'
import ImageNlp from './images/nlp.png'
import ImageRogue from './images/intrude.png'
import ImageVideoApps from './images/video-apps.png'
import styles from './index.css'


/**
 *
 */
const SectionApplications = (props, {config}) => {
  const {links} = config

  return (
    <div>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph lead={true}>
            We have created demonstration HTM applications in several fields
            such as IT monitoring, detecting unusual human behavior,
            geospatial tracking, and understanding natural language and we are
            confident that many additional applications will be created in the
            future.
          </Paragraph>

          <Paragraph>
            HTM is well suited for applications that have the following
            characteristics:
          </Paragraph>
          <List marker="disc">
            <ListItem>
              Data flowing through time… the data can be in the form of
              numbers, dates, text, or GPS points
            </ListItem>
            <ListItem>
              A data sampling rate from once per minute to once per hour, with
              the “sweet spot” being between once per minute and once every
              five minutes (faster velocity data can be aggregated or sampled
              as well)
            </ListItem>
            <ListItem>
              Data that has inherent structure, i.e. not entirely random
            </ListItem>
            <ListItem>
              Many models are required rather than one large model
            </ListItem>
            <ListItem>
              Focus of the application is prediction or anomaly detection
            </ListItem>
          </List>

          <Paragraph>
            The following applications are examples that fit these
            characteristics:
          </Paragraph>
          <List marker="disc">
            <ListItem>
              Predicting energy usage for a utility on a customer by customer
              basis
            </ListItem>
            <ListItem>
              Predicting failure in a complex machine based on data from many
              sensors
            </ListItem>
            <ListItem>
              Highlighting anomalies in the behavior of moving objects, such
              as tracking a fleet’s movements on a truck by truck basis
            </ListItem>
            <ListItem>
              Understanding if human behavior it normal or abnormal on a
              securities trading floor
            </ListItem>
          </List>
          <Paragraph>
            In order to demonstrate these capabilities, we have created
            several tools and example applications.
          </Paragraph>
        </div>
        <div className={styles.aside}>
          <Video
            image={ImageVideoApps}
            respond="mw"
            time="02:32"
            title="Intro to our Applications"
            type="youtube"
            videoId="9jWmS62MWx8"
          />
        </div>
      </div>

      <Anchor name="htmstudio" />
      <SubTitle>HTM Studio for Anomaly Detection</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            HTM Studio for Anomaly Detection is a tool that makes it easy to
            experiment with using HTM to detect anomalies in your own scalar
            data. Designed for the business-focused user, this tool makes it
            easy to develop a proof of concept with HTM technology. No coding
            skills are required to test it, and HTM parameters are determined
            automatically.
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.in.htmstudio}>
                More Information
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={[links.in.htmstudio, links.anchor.get].join('')}>
                Register to Give Feedback
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.aside}>
          <ImageLink to={links.in.htmstudio}>
            <Image
              alt="HTM Studio screenshot"
              border={true}
              respond="mw"
              src={ImageHtmStudio}
            />
          </ImageLink>
        </div>
      </div>

      <Anchor name="htmstocks" />
      <SubTitle>HTM for Stocks</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            HTM for Stocks is an example application that detects anomalies in
            publicly traded companies. It continuously models stock price,
            stock volume, and Twitter volume for top publicly traded companies
            and alerts you in real time when something unusual is happening.
            HTM for Stocks is available for free via the {' '}
            <TextLink to={links.out.htmstocksApp}>
              App Store
            </TextLink>
            {' '} or {' '}
            <TextLink to={links.out.htmstocksPlay}>
              Google Play Store.
            </TextLink>
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.in.htmstocks}>
                More Information
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={[links.in.htmstocks, links.anchor.get].join('')}>
                Register to Give Feedback
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.aside}>
          <ImageLink to={links.in.htmstocks}>
            <Image
              alt="HTM for Stocks screenshot"
              respond="mw"
              src={ImageHtmStocks}
            />
          </ImageLink>
        </div>
      </div>

      <Anchor name="grokit" />
      <SubTitle>Grok for IT Analytics</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            Grok for IT Analytics is a commercial application that detects
            anomalies in servers and applications. It learns continuously,
            automatically discovers time-based patterns in data, and
            generalizes from experience.
          </Paragraph>
          <Paragraph>
            Grok for IT Analytics 2.0 is now available at {' '}
            <TextLink to={links.out.grok}>{links.out.grok}.</TextLink>
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.grokGet}>
                Sign Up
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={links.out.grok}>
                More Information
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.aside}>
          <ImageLink to={links.out.grok}>
            <Image
              alt="Grok for IT Analytics screenshot"
              respond="mw"
              src={ImageGrokIt}
            />
          </ImageLink>
        </div>
      </div>

      <Anchor name="rogue" />
      <SubTitle>Rogue Behavior Detection</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            This example application models normal behavior of individuals by
            detecting changes in behavior, such as unusual use of files. You
            can experiment with this application using your own data by
            downloading our sample application code below.
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.roguePaper}>
                Whitepaper: HTM for Rogue Behavior
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={links.out.rogue}>
                Download Application Code
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.aside}>
          <ImageLink to={links.out.rogue}>
            <Image
              alt="Rogue Behavior Detection screenshot"
              respond="mw"
              src={ImageRogue}
            />
          </ImageLink>
        </div>
      </div>

      <Anchor name="geo" />
      <SubTitle>Geospatial Tracking</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            The example geospatial tracking application detects anomalies in
            the movement of people, objects, or material using speed and
            location data. Use this application to enable logistics
            optimization. You can experiment with this application using your
            own data by downloading our sample application code below.
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.geoPaper}>
                Whitepaper: HTM for Geospatial Tracking
              </TextLink>
            </ListItem>
            <ListItem>
              <TextLink to={links.out.geo}>
                Download Application Code
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.aside}>
          <ImageLink to={links.out.geo}>
            <Image
              alt="Geospatial Tracking screenshot"
              border={true}
              respond="mw"
              src={ImageGeo}
            />
          </ImageLink>
        </div>
      </div>

      <Anchor name="nlp" />
      <SubTitle>Natural Language Processing</SubTitle>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Paragraph>
            One of our partners, Cortical.io, has used Numenta’s technology
            to develop and commercialize Natural Language Processing
            Solutions. By representing language with highly efficient semantic
            fingerprints, Cortical.io has built the first semantic engine
            that can analyze text in real time, in any language. Learn more
            at {' '}
            <TextLink to={links.out.cortical}>{links.out.cortical}.</TextLink>
          </Paragraph>
          <List marker="disc">
            <ListItem>
              <TextLink to={links.out.cortical}>
                More Information
              </TextLink>
            </ListItem>
          </List>
        </div>
        <div className={styles.aside}>
          <ImageLink to={links.out.cortical}>
            <Image
              alt="Natural Language Processing screenshot"
              respond="mw"
              src={ImageNlp}
            />
          </ImageLink>
        </div>
      </div>
    </div>
  )
}

SectionApplications.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionApplications
