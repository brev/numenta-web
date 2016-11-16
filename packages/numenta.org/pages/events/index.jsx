// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'

import Anchor from 'numenta-web-shared-components/Anchor'
import ListItem from 'numenta-web-shared-components/ListItem'
import ListOrder from 'numenta-web-shared-components/List'
import Section from 'numenta-web-shared-components/Section'
import {sortDateAscend, sortDateDescend} from 'numenta-web-shared-utils/shared'
import SubTitle from 'numenta-web-shared-components/SubTitle'
import Subtle from 'numenta-web-shared-components/Subtle'

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
    <Subtle>No new events scheduled, please check back again soon!</Subtle>
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
