import React from 'react'

import {sortDateDescend} from '../../utils/shared'

import ListItem from '../../components/ListItem'
import ListOrder from '../../components/ListOrder'
import PostListItem from '../../components/PostListItem'
import Section from '../../components/Section'
import SubTitle from '../../components/SubTitle'


/**
 *
 */
const PressPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^press\/.*\.md/)))
  const pressLinks = posts
    .filter(({data}) => (data.type === 'link'))
    .sort(sortDateDescend).map((post) => (
      <ListItem key={post.file.stem}>
        <PostListItem post={post} />
      </ListItem>
    ))
  const pressReleases = posts
    .filter(({data}) => (data.type === 'post'))
    .sort(sortDateDescend).map((post) => (
      <ListItem key={post.file.stem}>
        <PostListItem post={post} />
      </ListItem>
    ))

  return (
    <div>
      <Section headline={true} open={true} title="Press">

        <SubTitle>Press Releases</SubTitle>
        <ListOrder copy={false}>
          {pressReleases}
        </ListOrder>

        <SubTitle>Press Links</SubTitle>
        <ListOrder copy={false}>
          {pressLinks}
        </ListOrder>

      </Section>
    </div>
  )
}

PressPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PressPage
