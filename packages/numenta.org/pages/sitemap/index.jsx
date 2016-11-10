// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import {zipObject} from 'lodash'
import React from 'react'

import Anchor from 'numenta-web-shared-components/Anchor'
import ListItem from 'numenta-web-shared-components/ListItem'
import ListOrder from 'numenta-web-shared-components/ListOrder'
import Section from 'numenta-web-shared-components/Section'
import {sortDateDescend} from 'numenta-web-shared-utils/shared'
import Spacer from 'numenta-web-shared-components/Spacer'
import SubTitle from 'numenta-web-shared-components/SubTitle'
import Subtle from 'numenta-web-shared-components/Subtle'
import TextLink from 'numenta-web-shared-components/TextLink'

import styles from './index.css'

const title = 'Sitemap'

const SitemapItem = (props) => {
  const {data, path} = props
  return (
    <ListItem {...props}>
      <TextLink to={path}>
        {data.title}
      </TextLink> {' '}
      <Spacer />
      <Subtle>{data.date}</Subtle>
    </ListItem>
  )
}
SitemapItem.propTypes = {
  data: React.PropTypes.object.isRequired,
  path: React.PropTypes.string.isRequired,
}


/**
 * Sitemap Page React view component
 */
const SitemapPage = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const categories = [
    'blog',
    'events',
  ]
  const posts = categories
    .map((category) => pages
      .filter(({data, file}) => {
        const matcher = new RegExp(`.*${category}/.*.md`)
        return (data.type === 'post') && file.path.match(matcher)
      })
      .sort(sortDateDescend)
      .map((post) => {
        post.key = post.file.stem
        return React.createElement(SitemapItem, post)
      })
    )
  const items = zipObject(categories, posts)

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>

        <div className={styles.columns}>
          <div className={styles.content}>

            <Anchor name="main" />
            <SubTitle>Main</SubTitle>
            <ListOrder marker="disc">
              <ListItem>
                <TextLink to={links.in.home}>
                  Home
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.research}>
                  Research &amp; Publications
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.community}>
                  Community
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.implement}>
                  Implementations
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.school}>
                  HTM School
                </TextLink>
              </ListItem>
            </ListOrder>

          </div>
          <div className={styles.aside}>

            <Anchor name="other" />
            <SubTitle>Other</SubTitle>
            <ListOrder marker="disc">
              <ListItem>
                <TextLink to={links.in.htm}>
                  Hierarchical Temporal Memory (HTM)
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.papers}>
                  Research Papers
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to="/">
                  @TODO Licenses
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.privacy}>
                  Privacy Policy
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.terms}>
                  Terms of Service
                </TextLink>
              </ListItem>
              <ListItem>
                <TextLink to={links.in.sitemap}>
                  Sitemap
                </TextLink>
              </ListItem>
            </ListOrder>

          </div>
        </div>
        <div className={styles.columns}>
          <div className={styles.content}>

            <Anchor name="events" />
            <SubTitle>
              <TextLink to={links.in.events}>
                Events
              </TextLink>
            </SubTitle>
            <ListOrder marker="disc">
              {items.events}
            </ListOrder>

          </div>
          <div className={styles.aside}>

            <Anchor name="blog" />
            <SubTitle>
              <TextLink to={links.in.blog}>
                Blog
              </TextLink>
            </SubTitle>
            <ListOrder marker="disc">
              {items.blog}
            </ListOrder>

          </div>
        </div>

      </Section>
    </article>
  )
}

SitemapPage.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SitemapPage
