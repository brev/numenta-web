// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import DefineItem from 'numenta-web-shared-components/DefineItem'
import DefineTitle from 'numenta-web-shared-components/DefineTitle'
import Glance from 'numenta-web-shared-components/Glance'
import Paragraph from 'numenta-web-shared-components/Paragraph'
import Spacer from 'numenta-web-shared-components/Spacer'
import Strong from 'numenta-web-shared-components/Strong'
import Tag from 'numenta-web-shared-components/Tag'
import TextLink from 'numenta-web-shared-components/TextLink'

import Logo from '../components/Logo'

import styles from './index.css'


/**
 * Numenta.org Home Page React Component
 */
const SectionIndex = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>

        <Glance head={<Logo />}>
          <DefineTitle>
            About
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.htm}>HTM</TextLink> {' '}
            is a biologically-constrained theory of intelligence based on years
            of research in theoretical neuroscience.
          </DefineItem>

          <DefineTitle>
            Community
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.out.forum}>
              HTM Forum
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Research
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.research}>
              Research &amp; Publications
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Open Source
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.implement}>
              Code
            </TextLink>
          </DefineItem>

          <DefineTitle>
            License
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.license}>
              AGPLv3
            </TextLink>
          </DefineItem>

          <DefineTitle>
            Content
          </DefineTitle>
          <DefineItem>
            <TextLink to={links.in.blog}>Blog</TextLink>
            <Spacer />
            <TextLink to={links.in.events}>Events</TextLink>
          </DefineItem>
        </Glance>

      </div>
      <div className={styles.content}>

        <Paragraph lead={true}>
          Welcome to the Numenta <Strong>HTM Community</Strong> – an open source
          platform and community for machine intelligence based on HTM Theory.
          Here you will find our open source project {' '}
          <TextLink to={links.in.implement}>NuPIC</TextLink> {' '}
          (Numenta Platform for Intelligent Computing), our open source project
          based on a theory of neocortex called {' '}
          <TextLink to={links.in.htm}>
            Hierarchical Temporal Memory (HTM).
          </TextLink> {' '}
          Parts of HTM theory have been implemented, tested, and used in
          applications, and other parts of HTM theory are still being developed.
          Today the HTM code in NuPIC can be used to analyze streaming data. It
          learns the time-based patterns in data, predicts future values, and
          detects anomalies. The HTM Community includes discussion groups on HTM
          theory, research on extending HTM, and source code for complete
          applications based on HTM. We welcome participation in all of these
          areas.
        </Paragraph>
        <div className={styles.promo}>
          <Tag>New</Tag>
          {' '}
          <TextLink to="/">
            Why did we overhaul our web design? The story behind our new look.
          </TextLink>
        </div>

      </div>
    </article>
  )
}

SectionIndex.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionIndex
