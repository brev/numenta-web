import React from 'react'

import {sortDateDescend} from '../../utils/shared'

import Anchor from '../../components/Anchor'
import ListItem from '../../components/ListItem'
import ListOrder from '../../components/ListOrder'
import PostListItem from '../../components/PostListItem'
import Section from '../../components/Section'
import Spacer from '../../components/Spacer'
import SubTitle from '../../components/SubTitle'
import Subtle from '../../components/Subtle'
import TextLink from '../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const PressPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^press\/.*\.md/)))
  const pressLinks = posts
    .filter(({data}) => (data.type === 'link'))
    .sort(sortDateDescend).map(({data, file}) => (
      <ListItem key={file.stem}>
        <div className={styles.link}>
          <div>
            <TextLink to={data.link}>
              {data.title}
            </TextLink>
          </div>
          <Subtle>
            {data.date}
            <Spacer />
            {data.author}
            <Spacer />
            {data.org}
          </Subtle>
        </div>
      </ListItem>
    ))
  const pressReleases = posts
    .filter(({data}) => (data.type === 'post'))
    .sort(sortDateDescend).map((post) => (
      <ListItem key={post.file.stem}>
        <div className={styles.release}>
          <PostListItem post={post} />
        </div>
      </ListItem>
    ))

  return (
    <div>
      <Section headline={true} open={true} title="Press Releases">
        <div className={styles.columns}>
          <div className={styles.content}>

            <ListOrder copy={false}>
              {pressReleases}
            </ListOrder>

          </div>
          <div className={styles.aside}>

            <Anchor name="links" />
            <SubTitle>Press Links</SubTitle>
            <ListOrder copy={false} marker="disc">
              {pressLinks}
            </ListOrder>

          </div>
        </div>
      </Section>
    </div>
  )
}

PressPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PressPage
