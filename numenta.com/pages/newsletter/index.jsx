// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Button from '../../../components/Button'
import Form from '../../../components/Form'
import FormInput from '../../../components/FormInput'
import FormLabel from '../../../components/FormLabel'
import FormRow from '../../../components/FormRow'
import ListItem from '../../../components/ListItem'
import ListOrder from '../../../components/ListOrder'
import Section from '../../../components/Section'
import {sortDateDescend} from '../../../utils/shared'

import PostListRow from '../../components/PostListRow'
import styles from './index.css'

const title = 'Newsletter'


/**
 * Newsletter page - React view component.
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
