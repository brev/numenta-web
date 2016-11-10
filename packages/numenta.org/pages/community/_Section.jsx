// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Anchor from 'numenta-web-shared-components/Anchor'
// import Image from 'numenta-web-shared-components/Image'
import Paragraph from 'numenta-web-shared-components/Paragraph'
import SubTitle from 'numenta-web-shared-components/SubTitle'
import TextLink from 'numenta-web-shared-components/TextLink'

import styles from './index.css'


/**
 * Community main Section/Page - React view component.
 */
const SectionCommunity = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        Aside {links.in.home}
      </div>
      <div className={styles.content}>
        <Paragraph lead={true}>
          Our community is an eclectic collection of researchers, scientists,
          hobbyists, and hackers interested in building biologically-inspired
          intelligent systems with Hierarchical Temporal Memory (HTM).
        </Paragraph>
        <Paragraph>
          To get involved in our community, join {' '}
          <TextLink to={links.out.forum}>
            HTM Forum.
          </TextLink> {' '}
          You can login with your Google, Facebook, or Twitter account, or by
          creating an new account with your email address. This is the best
          place to ask questions, search for answers, or just interact with
          others working on similar problems. We aim to be a helpful and
          welcoming community, and we hope you'll join us.
        </Paragraph>
        <Paragraph>
          The HTM Community is sponsored by {' '}
          <TextLink to={links.out.com}>
            Numenta,
          </TextLink> {' '}
          the company behind HTM. Since Numenta open sourced their {' '}
          <TextLink to={links.in.implement}>
            HTM implementations,
          </TextLink> {' '}
          they have dedicated {' '}
          <TextLink to="https://discourse.numenta.org/users/rhyolight">
            one employee
          </TextLink> {' '}
          to help foster and grow the HTM community. Numenta also organizes and
          sponsors community events like meetups, hackathons, and workshops. We
          at Numenta believe that HTM will thrive because it will be easily
          accessible to many people. Our community exemplifies the type of
          people drawn toward new technology, and it shows in our curiosity and
          open-mindedness.
        </Paragraph>

        <Anchor name="meetups" />
        <SubTitle>
          Meetups, Hackathons, &amp; other Live Events
        </SubTitle>
        <Paragraph>
          Take a {' '}
          <TextLink to={links.in.glance}>
            quick glance,
          </TextLink> or see all of our {' '}
          <TextLink to={links.in.events}>
            Upcoming Events.
          </TextLink>
        </Paragraph>
        <Paragraph>
          All our live events are scheduled via Meetup. Please join our {' '}
          {/* eslint-disable max-len */}
          <TextLink to="http://www.meetup.com/Numenta-Platform-for-Intelligent-Computing-Events/">
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
          <TextLink to="https://www.youtube.com/c/NumentaOrg">
            YouTube channel.
          </TextLink> {' '}
          You can also view our archive of {' '}
          <TextLink to={`${links.in.events}#past`}>
            Past Events.
          </TextLink>
        </Paragraph>
      </div>
    </article>
  )
}

SectionCommunity.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionCommunity
