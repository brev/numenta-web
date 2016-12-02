// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'

import Anchor from 'numenta-web-shared-components/Anchor'
import ListItem from 'numenta-web-shared-components/ListItem'
import ListOrder from 'numenta-web-shared-components/List'
import Paragraph from 'numenta-web-shared-components/Paragraph'
import Section from 'numenta-web-shared-components/Section'
import {sortDateAscend, sortDateDescend} from 'numenta-web-shared-utils/shared'
import SubTitle from 'numenta-web-shared-components/SubTitle'
import Subtle from 'numenta-web-shared-components/Subtle'
import TextLink from 'numenta-web-shared-components/TextLink'

import PostListRow from '../../components/PostListRow'
import styles from './index.css'

const title = 'Events'


/**
 * Event Post List index page - React view component.
 */
const EventsPage = (props, {config, route}) => {
  const {pages} = route
  const now = moment()
  const empty = (
    <Paragraph>
      <Subtle>
        No HTM Community events are currently scheduled, please check
        back soon.
        <br />
        Also, try the upcoming Numenta {' '}
        <TextLink to="http://numenta.com/events/">
          company events
        </TextLink> {' '} page.
      </Subtle>
    </Paragraph>
  )
  const posts = pages.filter(({file}) => (file.path.match(/^events\/.*\.md/)))
  const past = posts.filter(({data}) => (
    (moment(data.date, config.moments.post) < now)
  ))
  const upcoming = posts.filter(({data}) => (
    (moment(data.date, config.moments.post) >= now)
  ))
  const itemsPast = past.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))
  let itemsUp = upcoming.sort(sortDateAscend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))

  if (itemsUp.length < 1) itemsUp = empty

  return (
    <article className={styles.events}>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <ListOrder copy={false}>
          {itemsUp}
        </ListOrder>

        <Anchor name="past" />
        <SubTitle>Past Events</SubTitle>
        <ListOrder copy={false}>
          {itemsPast}
        </ListOrder>
      </Section>
    </article>
  )
}

EventsPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default EventsPage
