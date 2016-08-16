import Helmet from 'react-helmet'
import IconArrow from 'react-icons/lib/fa/caret-left'
import moment from 'moment'
import React from 'react'

import Avatar from '../components/Avatar'
import IconMarker from '../components/IconMarker'
import Image from '../components/Image'
import Section from '../components/Section'
import Spacer from '../components/Spacer'
import Strong from '../components/Strong'
import Subtle from '../components/Subtle'
import Table from '../components/Table'
import TableCell from '../components/TableCell'
import TableRow from '../components/TableRow'
import TextLink from '../components/TextLink'
import Time from '../components/Time'

import styles from './md.css'

const postTypes = ['blog', 'events', 'learn', 'newsletter', 'press']


/**
 *
 */
const MarkdownWrapper = ({route}, {config}) => {
  const {data, file, path} = route.page
  const datetime = moment(data.date, config.moments.post)
  const when = datetime.format(config.moments.human)
  const keys = file.dir.split('/')
  let key = keys[0]
  let url = `/${key}/`
  let author, back, date, event, photo, type

  if (key === 'papers-videos-and-more') {
    key = keys[1]  // 'learn'
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
            {key}
          </TextLink>
        </span>
      )
      back = (
        <div className={styles.back}>
          <IconMarker icon={<IconArrow />}>
            <TextLink to={url}>
              All {key} Posts
            </TextLink>
          </IconMarker>
        </div>
      )
    }

    if (key === 'events') {
      const {where} = data.event
      const {desc, city, state, country, web, what, who, why} = where
      const details = [(
        <TableRow>
          <TableCell>
            <Strong>When</Strong>
          </TableCell>
          <TableCell>
            {when}
          </TableCell>
        </TableRow>
      )]

      if (city) {
        details.push((
          <TableRow>
            <TableCell>
              <Strong>Where</Strong>
            </TableCell>
            <TableCell>
              <div>{desc}</div>
              <div>
                {city}, {state} {country}
              </div>
            </TableCell>
          </TableRow>
        ))
      }
      if (web) {
        details.push((
          <TableRow>
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
          <TableRow>
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
          <TableRow>
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
        <Table direction="horizontal">
          {details}
        </Table>
      )
    }
  }

  if (data.date) {
    date = (
      <div className={styles.date}>
        <Time moment={datetime}>{when}</Time>
        {type}
      </div>
    )
  }

  if (data.image) {
    photo = (
      <Image
        alt={data.title}
        border={true}
        respond="mw"
        shadow={true}
        src={`${path}${data.image}`}
      />
    )
  }


  return (
    <div className={styles.markdown}>
      <Helmet title={data.title} />
      {date}
      <Section
        headline={true}
        open={true}
        title={data.title}
      >
        {author}
        {photo}
        {event}
        <div
          dangerouslySetInnerHTML={{__html: data.body}}
          className={styles.content}
        />
        {author}
        {back}
      </Section>
    </div>
  )
}

MarkdownWrapper.contextTypes = {
  config: React.PropTypes.object,
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
