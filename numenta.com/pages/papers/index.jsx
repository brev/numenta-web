// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

import {capitalize} from 'lodash'
import Helmet from 'react-helmet'
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
