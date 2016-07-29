import React from 'react'

import {sortDateAscend, sortDateDescend} from '../../utils/universal'

import Anchor from '../../components/Anchor'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import PostItem from '../../components/PostItem'
import Section from '../../components/Section'
import SubTitle from '../../components/SubTitle'


/**
 *
 */
const EventsPage = (props, {route}) => {
  const {pages} = route
  const now = new Date()
  const posts = pages.filter(({file}) => (file.path.match(/^events\/.*\.md/)))
  const past = posts.filter(({data}) => (new Date(data.date) < now))
  const upcoming = posts.filter(({data}) => (new Date(data.date) >= now))
  const itemsPast = past.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostItem post={post} />
    </ListItem>
  ))
  const itemsUp = upcoming.sort(sortDateAscend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostItem post={post} />
    </ListItem>
  ))

  return (
    <div>
      <Section headline={true} open={true} title="Events">
        <Anchor name="upcoming" />
        <SubTitle>Upcoming Events</SubTitle>
        <List copy={false}>
          {itemsUp}
        </List>

        <Anchor name="past" />
        <SubTitle>Past Events</SubTitle>
        <List copy={false}>
          {itemsPast}
        </List>
      </Section>
    </div>
  )
}

EventsPage.contextTypes = {
  route: React.PropTypes.object,
}

export default EventsPage
