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

import Button from '../../components/Button'
import Form from '../../components/Form'
import FormInput from '../../components/FormInput'
import FormLabel from '../../components/FormLabel'
import FormRow from '../../components/FormRow'
import ListItem from '../../components/ListItem'
import ListOrder from '../../components/ListOrder'
import PostListRow from '../../components/PostListRow'
import Section from '../../components/Section'

import styles from './index.css'

const title = 'Newsletter'


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
      <PostListRow post={post} />
    </ListItem>
  ))

  return (
    <article>
      <Helmet title={title} />
      <div className={styles.signup}>
        {/* eslint-disable max-len */}
        <Form
          action="//numenta.us2.list-manage.com/subscribe/post?u=b838879da2baa539870afd320&amp;id=23e65d3407"
          method="post"
          name="mc-embedded-subscribe-form"
        >
          <FormRow>
            <div className={styles.field}>
              <FormLabel htmlFor="EMAIL">Newsletter Signup</FormLabel>
              <FormInput
                name="EMAIL"
                placeholder="name@company.com"
                stretch="large"
                type="email"
              />
              <Button theme="short" type="submit">Send</Button>
            </div>
          </FormRow>
          <FormInput
            name="b_b838879da2baa539870afd320_23e65d3407"
            type="hidden"
            value=""
          />
        </Form>
        {/* eslint-enable max-len */}
      </div>
      <div className={styles.newsletter}>
        <Section headline={true} open={true} title={title}>
          <ListOrder copy={false}>
            {items}
          </ListOrder>
        </Section>
      </div>
    </article>
  )
}

NewsletterPage.contextTypes = {
  route: React.PropTypes.object,
}

export default NewsletterPage
