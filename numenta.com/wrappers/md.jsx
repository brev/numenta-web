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

import {capitalize} from 'lodash'
import Helmet from 'react-helmet'
import IconArrow from 'react-icons/lib/fa/caret-left'
import moment from 'moment'
import React from 'react'

import {getEventTimeDisplay, getVideoIdFromUrl} from '../utils/shared'

import Avatar from '../components/Avatar'
import IconMarker from '../components/IconMarker'
import Image from '../components/Image'
import Markdown from '../components/Markdown'
import Section from '../components/Section'
import Spacer from '../components/Spacer'
import Strong from '../components/Strong'
import Subtle from '../components/Subtle'
import Table from '../components/Table'
import TableBody from '../components/TableBody'
import TableCell from '../components/TableCell'
import TableRow from '../components/TableRow'
import TextLink from '../components/TextLink'
import Time from '../components/Time'
import Video from '../components/Video'

import styles from './md.css'

const postTypes = [
  'blog', 'careers', 'events', 'newsletter', 'press', 'resources',
]


/**
 *
 */
const MarkdownWrapper = ({route}, {config}) => {
  const {data, file, path} = route.page
  const datetime = moment(data.date, config.moments.post)
  const occur = datetime.format(config.moments.human)
  let key = file.dir.split('/')[0]
  const url = `/${key}/`
  let author, back, date, event, media, type

  if (key === 'careers-and-team') {
    key = 'careers'
  }
  if (key === 'papers-videos-and-more') {
    key = 'resources'
  }

  if (data.type === 'post') {
    author = (
      <div className={styles.author}>
        <Subtle>
          <Avatar name={data.author} />
          {data.author}
          <Spacer />
          {data.org}
        </Subtle>
      </div>
    )

    if (postTypes.indexOf(key) > -1) {
      type = (
        <span>
          <Spacer />
          <TextLink to={url}>
            {capitalize(key)}
          </TextLink>
        </span>
      )
      back = (
        <div className={styles.back}>
          <IconMarker icon={<IconArrow />}>
            <TextLink to={url}>
              All {capitalize(key)} Posts
            </TextLink>
          </IconMarker>
        </div>
      )
    }

    if (key === 'events') {
      const {what, when, where, who, why} = data.event
      const {desc, city, state, country, web} = where
      const details = [(
        <TableRow key="when">
          <TableCell>
            <Strong>When</Strong>
          </TableCell>
          <TableCell>
            {getEventTimeDisplay(when)}
          </TableCell>
        </TableRow>
      )]
      let location = city

      if (state) {
        location = `${location}, ${state}`
      }
      if (country) {
        location = `${location} ${country}`
      }

      details.push((
        <TableRow key="where">
          <TableCell>
            <Strong>Where</Strong>
          </TableCell>
          <TableCell>
            <div>{desc}</div>
            <div>
              {location}
            </div>
          </TableCell>
        </TableRow>
      ))

      if (web) {
        details.push((
          <TableRow key="web">
            <TableCell>
              <Strong>Web</Strong>
            </TableCell>
            <TableCell>
              <TextLink to={web}>Event Website</TextLink>
            </TableCell>
          </TableRow>
        ))
      }
      if (what) {
        details.push((
          <TableRow key="topic">
            <TableCell>
              <Strong>Topic</Strong>
            </TableCell>
            <TableCell>
              {what}
            </TableCell>
          </TableRow>
        ))
      }
      if (why && who) {
        details.push((
          <TableRow key="why">
            <TableCell>
              <Strong>{why}</Strong>
            </TableCell>
            <TableCell>
              {who}
            </TableCell>
          </TableRow>
        ))
      }

      event = (
        <div className={styles.event}>
          <Table direction="horizontal">
            <TableBody>
              {details}
            </TableBody>
          </Table>
        </div>
      )
    }
  }

  if (data.date) {
    date = (
      <div className={styles.date}>
        <Time moment={datetime}>{occur}</Time>
        {type}
      </div>
    )
  }

  if (data.image && !data.hideImage) {
    if (data.video) {
      // media video
      media = (
        <Video
          border={true}
          image={`${path}${data.image}`}
          respond="mw"
          shadow={true}
          title={data.title}
          type="youtube"
          videoId={getVideoIdFromUrl(data.video)}
        />
      )
    }
    else {
      // media image
      media = (
        <Image
          alt={data.title}
          border={true}
          respond="mw"
          shadow={true}
          src={`${path}${data.image}`}
        />
      )
    }

    media = (
      <div className={styles.media}>{media}</div>
    )
  }

  return (
    <article className={styles.md}>
      <Helmet title={data.title} />
      {date}
      <Section
        headline={true}
        open={true}
        title={data.title}
      >
        {author}
        {media}
        {event}
        <div className={styles.content}>
          <Markdown>
            <div dangerouslySetInnerHTML={{__html: data.body}} />
          </Markdown>
        </div>
        {author}
        {back}
      </Section>
    </article>
  )
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

MarkdownWrapper.contextTypes = {
  config: React.PropTypes.object,
}

export default MarkdownWrapper
