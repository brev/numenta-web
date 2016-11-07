// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import {capitalize} from 'lodash'
import Helmet from 'react-helmet'
import React from 'react'

import {sortOrderAscend} from '../../../utils/shared'

import ListItem from '../../../components/ListItem'
import ListOrder from '../../../components/ListOrder'
import Paragraph from '../../../components/Paragraph'
import Section from '../../../components/Section'
import Spacer from '../../../components/Spacer'
import Subtle from '../../../components/Subtle'
import TextLink from '../../../components/TextLink'

import styles from './index.css'

const title = 'Research Papers'


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
          <div className={styles.title}>
            <TextLink to={data.link}>
              {data.title}
            </TextLink>
          </div>
          <div className={styles.meta}>
            <Subtle>
              {data.author}
              <Spacer />
              {categoryNice}
              <br />
              {data.org}
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
    <article className={styles.papers}>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>
        <ListOrder copy={false}>
          {items}
        </ListOrder>
      </Section>
    </article>
  )
}

PapersPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PapersPage
