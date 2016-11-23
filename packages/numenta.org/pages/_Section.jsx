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
          Numenta <Strong>HTM Community</Strong> is rad.
          {links.in.home}.
          Ullamco dolor reprehenderit sit id non esse voluptate minim cupidatat
          pariatur nisi sint consequat consectetur Lorem aliqua. Velit cupidatat
          culpa sunt anim adipisicing in ea in nisi sunt et. Minim magna nisi
          anim eu deserunt cupidatat pariatur ullamco irure ex deserunt id magna
          pariatur irure. Ut minim duis duis aliquip nostrud officia esse
          proident non incididunt sint. Enim labore ut eu voluptate quis culpa
          amet laboris Lorem sint ipsum ad aliquip dolor. Eu sunt tempor fugiat
          sit officia aliquip et aliquip dolor amet consequat ea. Veniam in anim
          fugiat fugiat id occaecat ex et nisi consequat enim duis.
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
