import Helmet from 'react-helmet'
import React from 'react'

import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'

const title = 'Sitemap'


/**
 *
 */
const SitemapPage = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <Paragraph>
          Coming Soon. {links.in.nab}
        </Paragraph>
      </Section>
    </article>
  )
}

SitemapPage.contextTypes = {
  config: React.PropTypes.object,
}

export default SitemapPage
