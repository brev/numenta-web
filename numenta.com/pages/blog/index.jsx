import React from 'react'

import {sortDateDescend} from '../../utils/shared'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import PostListItem from '../../components/PostListItem'
import Section from '../../components/Section'


/**
 *
 */
const BlogPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^blog\/.*\.md/)))
  const items = posts.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostListItem post={post} />
    </ListItem>
  ))

  return (
    <div>
      <Section headline={true} open={true} title="Blog">
        <List copy={false}>
          {items}
        </List>
      </Section>
    </div>
  )
}

BlogPage.contextTypes = {
  route: React.PropTypes.object,
}

export default BlogPage
