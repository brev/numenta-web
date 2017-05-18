// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Image from 'numenta-web-shared-components/lib/Image'
import SubTitle from 'numenta-web-shared-components/lib/SubTitle'
import Markdown from 'numenta-web-shared-components/lib/Markdown'
import Sound from 'numenta-web-shared-components/lib/Sound'
import Video from 'numenta-web-shared-components/lib/Video'
import {getVideoIdFromUrl} from 'numenta-web-shared-utils/lib/universal'


import styles from './index.css'


/**
 * Numenta in a Nutshell MainSection and page content - React
 *  view component.
 */
const SectionNutshell = (props, {route}) => {
  const {pages} = route
  const left = pages.find((file) =>
    file.path === '/numenta-in-a-nutshell/left/')
  const right = pages.find((file) =>
      file.path === '/numenta-in-a-nutshell/right/')
  let leftTitle, rightTitle, rightMedia
  if (left.data.title) {
    leftTitle = (<SubTitle>{left.data.title}</SubTitle>)
  }
  if (right.data.image && !right.data.hideImage) {
    if (right.data.video) {
      // media video
      rightMedia = (
        <Video
          border={true}
          image={`${right.path}${right.data.image}`}
          respond="mw"
          shadow={true}
          title={right.data.title}
          type="youtube"
          videoId={getVideoIdFromUrl(right.data.video)}
        />
      )
    }
    else if (right.data.sound) {
      // media sound
      rightMedia = (
        <Sound
          border={true}
          image={`${right.path}${right.data.image}`}
          respond="mw"
          shadow={true}
          title={right.data.title}
          type="soundcloud"
          url={right.data.sound}
        />
      )
    }
    else {
      // media image
      rightMedia = (
        <Image
          alt={right.data.title}
          border={true}
          respond="mw"
          shadow={true}
          src={`${right.path}${right.data.image}`}
        />
      )
    }

    rightMedia = (
      <div className={styles.media}>{rightMedia}</div>
    )
  }
  else if (right.data.title) {
    rightTitle = (<SubTitle>{right.data.title}</SubTitle>)
  }

  return (
    <article className={styles.columns}>
      <div className={styles.content}>
        <Markdown>
          {leftTitle}
          <div dangerouslySetInnerHTML={{__html: left.data.body}} />
        </Markdown>
      </div>
      <div className={styles.aside}>
        <Markdown>
          {rightTitle}
          {rightMedia}
          <div dangerouslySetInnerHTML={{__html: right.data.body}} />
        </Markdown>
      </div>
    </article>
  )
}

SectionNutshell.contextTypes = {
  route: React.PropTypes.object,
}

export default SectionNutshell
