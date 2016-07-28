import IconGithub from 'react-icons/lib/fa/github'
import React from 'react'

import Paragraph from '../../components/Paragraph'
import TextLink from '../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const SectionOpensource = (props, {config}) => {
  const {links} = config

  return (
    <div className={styles.columns}>
      <div className={styles.content}>
        <Paragraph lead={true}>
          Because we want our technology to be broadly adopted, we make it
          broadly accessible as well. We are committed to transparency of
          our ideas, technology and research.  We have developed an open
          source project called NuPIC (Numenta Platform for Intelligent
          Computing), where you’ll find all of our algorithms and daily
          research code documented. NuPIC comprises a community of
          researchers, data scientists and developers working on our
          Hierarchical Temporal Memory technology.
        </Paragraph>
        <Paragraph>
          NuPIC includes a discussion forum covering a variety of topics,
          including HTM theory, research on extending HTM, and source code
          for complete applications based on HTM. If you are interested in
          seeing, developing or working with our technology, we invite you
          to participate at {' '}
          <TextLink to={links.out.org}>
            {links.out.org}
          </TextLink>.
        </Paragraph>
        <Paragraph>
          Our technology is available for free through the {' '}
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
      <div className={styles.aside}>
        <IconGithub className={styles.icon} />
      </div>
    </div>
  )
}

SectionOpensource.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionOpensource
