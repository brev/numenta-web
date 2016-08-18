import React from 'react'

import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'

import ImageBrain from './images/brain.svg'
import styles from './index.css'


/**
 *
 */
const SectionOpensource = (props, {config}) => {
  const {links} = config

  return (
    <div className={styles.columns}>
      <div className={styles.aside}>
        <Image
          alt="Stylized Brain Artwork"
          respond="mw"
          shadow={false}
          src={ImageBrain}
        />
      </div>
      <div className={styles.content}>
        <Paragraph lead={true}>
          Because we want our technology to be broadly adopted, we make it
          widely accessible in an open source community. There you’ll find our
          algorithms, daily research, source code, and an active discussion
          forum with HTM community members covering a variety of topics.
        </Paragraph>
        <Paragraph>
          You’ll also find our implementation of HTM theory, called NuPIC
          (Numenta Platform for Intelligence Computing), which is written in C++
          and Python. Other implementations have been ported from NuPIC into
          other languages by community members.
        </Paragraph>
        <Paragraph>
          If you are interested in seeing, developing or working with our
          technology, we invite you to participate at {' '}
          <TextLink to={links.out.org}>
            {links.out.org}
          </TextLink>.
          Anyone is welcome to use our technology for free, under the {' '}
          <TextLink to={links.out.license}>
            AGPLv3 open source license.
          </TextLink> {' '}
          In addition, we have created a separate, {' '}
          <TextLink to={links.out.trial}>
            trial license without commercial rights
          </TextLink> {' '}
          for those individuals or organizations who are unable to use the
          AGPLv3 license. For more on our licenses, see the {' '}
          <TextLink to={links.in.business}>
            Business Strategy & IP
          </TextLink> {' '}
          section.
        </Paragraph>
      </div>
    </div>
  )
}

SectionOpensource.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionOpensource
