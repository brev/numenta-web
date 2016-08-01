import moment from 'moment'
import React from 'react'

import Avatar from '../Avatar'
import Image from '../Image'
import ImageLink from '../ImageLink'
import Paragraph from '../Paragraph'
import Spacer from '../Spacer'
import Subtle from '../Subtle'
import TextLink from '../TextLink'
import Time from '../Time'

import styles from './index.css'


/**
 *
 */
const PostListItem = ({post}, {config}) => {
  const {data, path} = post
  const datetime = moment(data.date, config.moments.post)
  const when = datetime.format(config.moments.human)

  return (
    <article className={styles.postListItem}>
      <div className={styles.columns}>
        <div className={styles.content}>
          <div className={styles.date}>
            <Time moment={datetime}>{when}</Time>
          </div>
          <TextLink to={path}>
            <span className={styles.title}>
              {data.title}
            </span>
          </TextLink>
          <Paragraph>
            {data.brief || ''}
          </Paragraph>
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
            <ImageLink to={path}>
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
