import React from 'react'

import {sortDateDescend} from '../../utils/universal'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import PostItem from '../../components/PostItem'
import Section from '../../components/Section'


/**
 *
 */
const NewsletterPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (
    (file.path.match(/^newsletter\/.*\.md/))
  ))
  const items = posts.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostItem post={post} />
    </ListItem>
  ))

  return (
    <div>
      <Section headline={true} open={true} title="Newsletter">
        <List copy={false}>
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
