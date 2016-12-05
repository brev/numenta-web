// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconPlay from 'react-icons/lib/fa/youtube-play'
import React from 'react'

import IconMarker from 'numenta-web-shared-components/IconMarker'
import Image from 'numenta-web-shared-components/Image'
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
          <Image
            alt="HTM School Video Screenshot"
            border={false}
            respond="mw"
            shadow={false}
            src={ImageMain}
          />
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            To help you learn about our theory and technology, we have organized
            educational content below. It is designed for anyone who wants to
            learn about {' '}
            <TextLink to={links.in.htm}>
              HTM cortical theory
            </TextLink> {' '}
            and its applications for machine intelligence.
          </Paragraph>
          <Paragraph>
            <IconMarker icon={<IconPlay />}>
              <TextLink to={links.out.school}>
                HTM School on YouTube
              </TextLink>
            </IconMarker>
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionSchool.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionSchool
