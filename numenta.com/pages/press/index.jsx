import React from 'react'

import {sortDateDescend} from '../../utils/universal'

import List from '../../components/List'
import ListItem from '../../components/ListItem'
import PostItem from '../../components/PostItem'
import Section from '../../components/Section'


/**
 *
 */
const PressPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^press\/.*\.md/)))
  const items = posts.sort(sortDateDescend).map((post) => (
    <ListItem key={post.file.stem}>
      <PostItem post={post} />
    </ListItem>
  ))

  return (
    <div>
      <Section headline={true} open={true} title="Press">
        <List copy={false}>
          {items}
        </List>
      </Section>
    </div>
  )
}

PressPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PressPage
