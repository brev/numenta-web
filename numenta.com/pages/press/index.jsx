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

import Helmet from 'react-helmet'
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
    <article>
      <Helmet title="Press" />
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
    </article>
  )
}

PressPage.contextTypes = {
  route: React.PropTypes.object,
}

export default PressPage
