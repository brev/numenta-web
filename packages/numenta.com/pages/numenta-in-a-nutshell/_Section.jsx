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

import LeftColumn from './left.md'
import RightColumn from './right.md'
import styles from './index.css'


/**
 * Numenta in a Nutshell MainSection and page content - React
 *  view component.
 */
const SectionNutshell = () => {

  let leftTitle, rightTitle, rightMedia
  if (LeftColumn.title) {
    leftTitle = (<SubTitle>{LeftColumn.title}</SubTitle>)
  }
  if (RightColumn.image && !RightColumn.hideImage) {
    if (RightColumn.video) {
      // media video
      rightMedia = (
        <Video
          border={true}
          image={RightColumn.image}
          respond="mw"
          shadow={true}
          title={RightColumn.title}
          type="youtube"
          videoId={getVideoIdFromUrl(RightColumn.video)}
        />
      )
    }
    else if (RightColumn.sound) {
      // media sound
      rightMedia = (
        <Sound
          border={true}
          image={RightColumn.image}
          respond="mw"
          shadow={true}
          title={RightColumn.title}
          type="soundcloud"
          url={RightColumn.sound}
        />
      )
    }
    else {
      // media image
      rightMedia = (
        <Image
          alt={RightColumn.title}
          border={true}
          respond="mw"
          shadow={true}
          src={RightColumn.image}
        />
      )
    }

    rightMedia = (
      <div className={styles.media}>{rightMedia}</div>
    )
  }
  else if (RightColumn.title) {
    rightTitle = (<SubTitle>{RightColumn.title}</SubTitle>)
  }

  return (
    <article className={styles.columns}>
      <div className={styles.content}>
        <Markdown>
          {leftTitle}
          <div dangerouslySetInnerHTML={{__html: LeftColumn.body}} />
        </Markdown>
      </div>
      <div className={styles.aside}>
        <Markdown>
          {rightTitle}
          {rightMedia}
          <div dangerouslySetInnerHTML={{__html: RightColumn.body}} />
        </Markdown>
      </div>
    </article>
  )
}

SectionNutshell.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionNutshell
