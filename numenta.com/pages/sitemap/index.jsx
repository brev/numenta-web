import React from 'react'

// import List from '../../components/List'
// import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
// import SubTitle from '../../components/SubTitle'
// import TextLink from '../../components/TextLink'


/**
 *
 */
const SitemapPage = (state, {config}) => {
  const {links} = config

  return (
    <div>
      <Section headline={true} open={true} title="Sitemap">
        <Paragraph>
          Coming Soon. {links.out.org}
        </Paragraph>
      </Section>
    </div>
  )
}

SitemapPage.contextTypes = {
  config: React.PropTypes.object,
}

export default SitemapPage
