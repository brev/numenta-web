import React from 'react'

import Image from '../Image'
import ImageLink from '../ImageLink'
import PostListItem from '../PostListItem'

import styles from './index.css'


/**
 *
 */
const PostListRow = ({post}) => {
  const {data, path} = post
  const target = (data.type === 'link') ? data.link : path

  return (
    <article className={styles.row}>
      <div className={styles.columns}>
        <div className={styles.content}>

          <PostListItem post={post} />

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

PostListRow.propTypes = {
  post: React.PropTypes.object.isRequired,
}

export default PostListRow
