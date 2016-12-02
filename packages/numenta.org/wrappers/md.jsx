// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import {capitalize} from 'lodash'
import Helmet from 'react-helmet'
import IconArrow from 'react-icons/lib/fa/caret-left'
import moment from 'moment'
import React from 'react'

import Avatar from 'numenta-web-shared-components/Avatar'
import IconMarker from 'numenta-web-shared-components/IconMarker'
import Image from 'numenta-web-shared-components/Image'
import Markdown from 'numenta-web-shared-components/Markdown'
import Section from 'numenta-web-shared-components/Section'
import Spacer from 'numenta-web-shared-components/Spacer'
import Strong from 'numenta-web-shared-components/Strong'
import Subtle from 'numenta-web-shared-components/Subtle'
import Table from 'numenta-web-shared-components/Table'
import TableBody from 'numenta-web-shared-components/TableBody'
import TableCell from 'numenta-web-shared-components/TableCell'
import TableRow from 'numenta-web-shared-components/TableRow'
import TextLink from 'numenta-web-shared-components/TextLink'
import Time from 'numenta-web-shared-components/Time'
import Video from 'numenta-web-shared-components/Video'
import {
  getEventTimeDisplay, getVideoIdFromUrl,
} from 'numenta-web-shared-utils/shared'

import styles from './md.css'

const pluralize = (text) => (text.match(/s$/) ? text : `${text}s`)
const postTypes = ['blog', 'events', 'papers']


/**
 * Markdown file wrapper - React view component.
 */
const MarkdownWrapper = ({route}, {config}) => {
  const {data, file, path} = route.page
  const datetime = moment(data.date, config.moments.post)
  const occur = datetime.format(config.moments.human)
  const key = file.dir.split('/')[0]
  const url = `/${key}/`
  let author, back, date, event, media, type

  if (data.type === 'post') {
    if (key !== 'papers') {
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
    }

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
              All {capitalize(pluralize(key))}
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

  if (data.date && key !== 'papers') {
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
  route: React.PropTypes.object.isRequired,
}

MarkdownWrapper.contextTypes = {
  config: React.PropTypes.object,
}

export default MarkdownWrapper
