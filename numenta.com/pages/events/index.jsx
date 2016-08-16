import moment from 'moment'
import React from 'react'

import {sortDateAscend, sortDateDescend} from '../../utils/shared'

import Anchor from '../../components/Anchor'
import ListItem from '../../components/ListItem'
import ListOrder from '../../components/List'
import PostListRow from '../../components/PostListRow'
import Section from '../../components/Section'
import SubTitle from '../../components/SubTitle'


/**
 *
 */
const EventsPage = (props, {config, route}) => {
  const {pages} = route
  const now = moment()
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
  const itemsUp = upcoming.sort(sortDateAscend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListRow post={post} />
    </ListItem>
  ))

  return (
    <div>
      <Section headline={true} open={true} title="Events">
        <Anchor name="upcoming" />
        <SubTitle>Upcoming Events</SubTitle>
        <ListOrder copy={false}>
          {itemsUp}
        </ListOrder>

        <Anchor name="past" />
        <SubTitle>Past Events</SubTitle>
        <ListOrder copy={false}>
          {itemsPast}
        </ListOrder>
      </Section>
    </div>
  )
}

EventsPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default EventsPage
