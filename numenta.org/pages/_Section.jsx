// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import Paragraph from '../components/Paragraph'
import Strong from '../components/Strong'

import styles from './index.css'


/**
 * Numenta.org Home Page React Component
 */
const SectionIndex = (props, {config}) => {
  const {links} = config

  return (
    <article className={styles.columns}>
      <div className={styles.aside}>
        Aside
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
      </div>
    </article>
  )
}

SectionIndex.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionIndex
