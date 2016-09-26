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

import Image from '../../components/Image'
import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'

import ImageOpensource from './images/image.png'
import styles from './index.css'


/**
 * Open Source Community main Section/Page - React view component.
 */
const SectionOpensource = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        <Image
          alt="Numenta Open Source Hackathon Event"
          respond="mw"
          src={ImageOpensource}
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
          (Numenta Platform for Intelligent Computing), which is written in C++
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
    </article>
  )
}

SectionOpensource.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionOpensource
