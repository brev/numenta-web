// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'

import {sortDateAscend, sortDateDescend} from '../../utils/shared'

import Anchor from '../../components/Anchor'
import ListItem from '../../components/ListItem'
import ListOrder from '../../components/List'
import PostListRow from '../../components/PostListRow'
import Section from '../../components/Section'
import SubTitle from '../../components/SubTitle'

import styles from './index.css'

const title = 'Events'


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
    <article className={styles.events}>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
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
    </article>
  )
}

EventsPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default EventsPage
