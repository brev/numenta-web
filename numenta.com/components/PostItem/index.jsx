import React from 'react'

import Image from '../Image'
import ImageLink from '../ImageLink'
import Paragraph from '../Paragraph'
import Spacer from '../Spacer'
import Strong from '../Strong'
import TextLink from '../TextLink'

import styles from './index.css'


const PostItem = ({post}) => {
  const {data, path} = post

  return (
    <article className={styles.postItem}>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Strong>{data.date}</Strong>
          <br />
          <TextLink to={path}>
            {data.title}
          </TextLink>
          <div>
            {data.author}
            <Spacer />
            {data.org}
          </div>
          <Paragraph>
            {data.brief}
          </Paragraph>
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

PostItem.propTypes = {
  post: React.PropTypes.object.isRequired,
}

export default PostItem
