import moment from 'moment'
import React from 'react'

import Avatar from '../Avatar'
import Image from '../Image'
import ImageLink from '../ImageLink'
import Paragraph from '../Paragraph'
import Spacer from '../Spacer'
import Strong from '../Strong'
import Subtle from '../Subtle'
import Table from '../Table'
import TableCell from '../TableCell'
import TableRow from '../TableRow'
import TextLink from '../TextLink'
import Time from '../Time'

import styles from './index.css'


/**
 *
 */
const PostListItem = ({post}, {config}) => {
  const {data, file, path} = post
  const datetime = moment(data.date, config.moments.post)
  const when = datetime.format(config.moments.human)
  const target = (data.type === 'link') ? data.link : path
  const key = file.dir.split('/')[0]
  let brief = (<Paragraph>{data.brief}</Paragraph>)

  if (key === 'events') {
    const {where} = data.event
    const {desc, city, state, country} = where

    brief = (
      <Table direction="horizontal">
        <TableRow>
          <TableCell>
            <Strong>When</Strong>
          </TableCell>
          <TableCell>
            {when}
          </TableCell>
        </TableRow>
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
      </Table>
    )
  }

  return (
    <article className={styles.postListItem}>
      <div className={styles.columns}>
        <div className={styles.content}>
          <div className={styles.date}>
            <Time moment={datetime}>{when}</Time>
          </div>
          <TextLink to={target}>
            <span className={styles.title}>
              {data.title}
            </span>
          </TextLink>
          {brief}
          <div className={styles.author}>
            <Subtle>
              <Avatar name={data.author} />
              {data.author}
              <Spacer />
              {data.org}
            </Subtle>
          </div>
        </div>
        <div className={styles.aside}>
          <div className={styles.image}>
            <ImageLink to={target}>
              <Image
                alt={data.title}
                respond="mw"
                shadow={true}
                src={`${path}${data.image}`}
              />
            </ImageLink>
          </div>
        </div>
      </div>
    </article>
  )
}

PostListItem.contextTypes = {
  config: React.PropTypes.object,
}

PostListItem.propTypes = {
  post: React.PropTypes.object.isRequired,
}

export default PostListItem
