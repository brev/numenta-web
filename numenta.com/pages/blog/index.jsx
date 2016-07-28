import React from 'react'

import {sortPostsDescend} from '../../utils/universal'

import Image from '../../components/Image'
import ImageLink from '../../components/ImageLink'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Spacer from '../../components/Spacer'
import Strong from '../../components/Strong'
import TextLink from '../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const BlogPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^blog\/.*\.md/)))
  const items = posts.sort(sortPostsDescend).map(({data, file, path}) => (
    <ListItem key={file.stem}>
      <div className={styles.columns}>
        <div className={styles.content}>
          <Strong>{data.date}</Strong>
          <br />
          <TextLink to={path}>
            {data.title}
          </TextLink>
          <div>
            {data.author}
            <Spacer />
            {data.org}
          </div>
          <Paragraph>
            {data.brief}
          </Paragraph>
        </div>
        <div className={styles.aside}>
          <ImageLink to={path}>
            <Image
              alt={data.title}
              respond="mw"
              shadow={true}
              src={data.image}
            />
          </ImageLink>
        </div>
      </div>
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
