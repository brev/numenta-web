// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import IconPlay from 'react-icons/lib/fa/youtube-play'
import React from 'react'

import IconMarker from 'numenta-web-shared-components/IconMarker'
import Image from 'numenta-web-shared-components/Image'
import ImageLink from 'numenta-web-shared-components/ImageLink'
import Paragraph from 'numenta-web-shared-components/Paragraph'
import TextLink from 'numenta-web-shared-components/TextLink'

import ImageMain from './images/image.png'
import styles from './index.css'


/**
 * HTM School MainSection content, wrapped by HTM School main section page -
 *  React view component.
 */
const SectionSchool = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <ImageLink to={links.out.school}>
            <Image
              alt="HTM School Video Screenshot"
              border={true}
              respond="mw"
              src={ImageMain}
            />
          </ImageLink>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            To help you learn about our theory and technology, we have organized
            educational content below. It is designed for anyone who wants to
            learn about HTM cortical theory and its applications for machine
            intelligence.
          </Paragraph>
          <div className={styles.promote}>
            <IconMarker icon={<IconPlay />}>
              <TextLink to={links.out.school}>
                HTM School on YouTube
              </TextLink>
            </IconMarker>
          </div>
        </div>
      </div>
    </article>
  )
}

SectionSchool.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionSchool
