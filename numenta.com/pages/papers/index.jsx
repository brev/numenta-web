import {capitalize} from 'lodash'
import React from 'react'

import {sortOrderAscend} from '../../utils/shared'

import ListItem from '../../components/ListItem'
import ListOrder from '../../components/ListOrder'
import Paragraph from '../../components/Paragraph'
import Section from '../../components/Section'
import Spacer from '../../components/Spacer'
import Subtle from '../../components/Subtle'
import TextLink from '../../components/TextLink'

import styles from './index.css'


/**
 *
 */
const PapersPage = (props, {route}) => {
  const {pages} = route
  const posts = pages.filter(({file}) => (file.path.match(/^papers\/.*\.md/)))
  const items = posts.sort(sortOrderAscend).map(({data, file}) => {
    const categoryNice = capitalize(data.category.replace(/-/, ' '))
    return (
      <ListItem key={file.stem}>
        <div className={styles.paper}>
          <div>
            <TextLink to={data.link}>
              {data.title}
            </TextLink>
          </div>
          <div>
            <Subtle>
              {data.author}
              <br />
              {data.org}
              <Spacer />
              {categoryNice}
              <Spacer />
              {data.date}
            </Subtle>
          </div>
          <Paragraph>
            {data.brief}
          </Paragraph>
        </div>
      </ListItem>
    )
  })

  return (
    <div className={styles.papers}>
      <Section headline={true} open={true} title="Research Papers">
        <ListOrder copy={false}>
          {items}
        </ListOrder>
      </Section>
    </div>
  )
}

PapersPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PapersPage
