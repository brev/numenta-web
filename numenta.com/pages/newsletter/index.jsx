import React from 'react'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Spacer from '../../components/Spacer'
import Strong from '../../components/Strong'
import {sortPostsDescend} from '../../utils/universal'
import TextLink from '../../components/TextLink'


/**
 *
 */
const NewsletterPage = (state, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (
    (file.path.match(/^newsletter\/.*\.md/))
  ))
  const items = posts.sort(sortPostsDescend).map(({data, file, path}) => (
    <ListItem key={file.stem}>
      <Paragraph>
        <Strong>{data.date}</Strong>
        <br />
        <TextLink to={path}>
          {data.title}
        </TextLink>
        <br />
        <span>
          {data.author}
          <Spacer />
          {data.org}
        </span>
        <br />
        <span>
          {data.brief}
        </span>
      </Paragraph>
    </ListItem>
  ))

  return (
    <div>
      <Section headline={true} open={true} title="Newsletter">
        <List>
          {items}
        </List>
      </Section>
    </div>
  )
}

NewsletterPage.contextTypes = {
  route: React.PropTypes.object,
}

export default NewsletterPage
