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

import React from 'react'

import {getVideoIdFromUrl} from '../../utils/shared'

import Image from '../Image'
import ImageLink from '../ImageLink'
import PostListItem from '../PostListItem'
import Video from '../Video'

import styles from './index.css'


/**
 *
 */
const PostListRow = ({post}) => {
  const {data, path} = post
  const target = (data.type === 'link') ? data.link : path
  let media = (  // media image (default)
    <ImageLink to={target}>
      <Image
        alt={data.title}
        border={true}
        respond="mw"
        shadow={true}
        src={`${path}${data.image}`}
      />
    </ImageLink>
  )

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

  return (
    <article className={styles.row}>
      <div className={styles.columns}>
        <div className={styles.aside}>
          {media}
        </div>
        <div className={styles.content}>
          <PostListItem post={post} />
        </div>
      </div>
    </article>
  )
}

PostListRow.propTypes = {
  post: React.PropTypes.object.isRequired,
}

export default PostListRow
