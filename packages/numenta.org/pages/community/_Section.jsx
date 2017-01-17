// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Anchor from 'numenta-web-shared-components/lib/Anchor'
import Image from 'numenta-web-shared-components/lib/Image'
import Paragraph from 'numenta-web-shared-components/lib/Paragraph'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import TextLink from 'numenta-web-shared-components/lib/TextLink'

import ImageCommunity from './images/image.png'
import ImageCommunity2 from './images/image2.png'
import styles from './index.css'


/**
 * Community main Section/Page - React view component.
 */
const SectionCommunity = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="HTM Community Event"
            border={true}
            respond="mw"
            shadow={true}
            src={ImageCommunity}
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Our community is an eclectic collection of researchers, scientists,
            hobbyists, and hackers interested in building biologically-inspired
            intelligent systems with Hierarchical Temporal Memory (HTM).
          </Paragraph>
          <Paragraph>
            Sponsored by
            <TextLink to={links.out.com}> {' '}
              Numenta
            </TextLink> {' '}
            and supported by a full-time employee dedicated to fostering and
            growing the community, we strive to create an inclusive environment.
            Our community exemplifies the type of people drawn toward new
            technology, and it shows in our curiosity and open-mindedness.
          </Paragraph>
          <Paragraph>
            To get involved in our community, join {' '}
            <TextLink to={links.out.forum}>
              HTM Forum.
            </TextLink> {' '}
            You can login with your Google, Facebook, or Twitter account, or by
            creating a new account with your email address. This is the best
            place to ask questions, search for answers, or just interact with
            others working on similar problems. We aim to be a helpful and
            welcoming community, and we hope you'll join us.
          </Paragraph>
        </div>
      </div>

      <Anchor name="events" />
      <SubTitle>
        Meetups, Hackathons, &amp; Other Live Events
      </SubTitle>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <Image
            alt="HTM Community Event #2"
            border={true}
            respond="mw"
            shadow={true}
            src={ImageCommunity2}
          />
        </div>
        <div className={styles.content}>
          <Paragraph>
            While many of our interactions are virtual, we do hold community
            events like meetups, hackathons, and workshops throughout the year.
            All our live events are scheduled via Meetup. Please join our {' '}
            {/* eslint-disable max-len */}
            <TextLink to={links.out.meetup}>
              Meetup Group
            </TextLink> {' '}
            {/* eslint-enable max-len */}
            for notifications of upcoming events, all of which are free and open
            to anyone. Please read our {' '}
            <TextLink to={links.in.conduct}>
              code of conduct
            </TextLink> {' '}
            before attending events.
          </Paragraph>
          <Paragraph>
            For recordings of previous events, please see our {' '}
            <TextLink to={links.out.youtube}>
              YouTube channel.
            </TextLink> {' '}
            You may also be interested in Numenta's {' '}
            <TextLink to="http://numenta.com/events/">
              company events and archive.
            </TextLink>
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionCommunity.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionCommunity
