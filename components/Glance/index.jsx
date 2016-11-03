// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import {trims} from '../../utils/shared'

import DefineItem from '../DefineItem'
import DefineList from '../DefineList'
import DefineTitle from '../DefineTitle'
import Logo from '../Logo'
import Spacer from '../Spacer'
import Tag from '../Tag'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 * At-A-Glance React view component. Quick Details about the company/site.
 */
const Glance = (props, context) => {
  const {config} = context
  const {links} = config
  const data = {
    About: trims`Developing a neocortical theory for biological and machine
            intelligence.`,
    Established: (
      <span>
        Feb 4, 2005
        <Spacer />
        Redwood City, CA
      </span>
    ),
    Employees: '15 — 20',
    Business: (
      <TextLink to="/assets/pdf/apps/licensing-guide.pdf">Licensing</TextLink>
    ),
    Content: (
      <span>
        <TextLink to={links.in.blog}>Blog</TextLink>
        <Spacer />
        <TextLink to={links.in.newsletter}>Newsletter</TextLink>
      </span>
    ),
    Press: (
      <span>
        <TextLink to={links.in.press}>
          Releases
        </TextLink>
        <Spacer />
        <TextLink to={`${links.in.press}#links`}>
          Links
        </TextLink>
      </span>
    ),
    Events: (
      <TextLink to={links.in.events}>Events</TextLink>
    ),
    /* eslint-disable max-len */
    Latest: (
      <TextLink to="/blog/2016/09/02/why-did-we-completely-change-our-website-design-the-story-behind-our-new-look/">
        Why did we overhaul our web design? The story behind our new look. {' '}
        <Tag>New</Tag>
      </TextLink>
    ),
    /* eslint-ensable max-len */
  }
  const defs = []

  for (const key in data) {
    if ({}.hasOwnProperty.call(data, key)) {
      defs.push(
        <DefineTitle key={`DefineTitle-${key}`}>
          {key}
        </DefineTitle>
      )
      defs.push(
        <DefineItem key={`DefineItem-${key}`}>
          {data[key]}
        </DefineItem>
      )
    }
  }

  return (
    <aside className={styles.glance}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <DefineList direction="horizontal">
        {defs}
      </DefineList>
    </aside>
  )
}

Glance.contextTypes = {
  config: React.PropTypes.object,
}

export default Glance
