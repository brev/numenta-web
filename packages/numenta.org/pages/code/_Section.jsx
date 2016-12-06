// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import React from 'react'

import Paragraph from 'numenta-web-shared-components/Paragraph'
import TextLink from 'numenta-web-shared-components/TextLink'

import styles from './index.css'


/**
 * Code MainSection and page content - React view component.
 */
const SectionCode = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <div className={styles.columns}>
        <div className={styles.aside}>
          <div className={styles.logomark}>
            Aside
          </div>
        </div>
        <div className={styles.content}>
          <Paragraph lead={true}>
            Our code is strong. Please see more details in {' '}
            <TextLink to={links.in.implement}>
              implementations.
            </TextLink> {' '}
            Nostrud magna ullamco dolore ut anim quis in incididunt pariatur
            commodo aliqua. Officia consequat voluptate reprehenderit commodo
            quis quis laboris dolor sunt ipsum est quis nostrud. Enim anim do
            mollit ex sint excepteur excepteur quis anim. Dolor deserunt eiusmod
            ad dolor irure pariatur id officia dolor. Velit labore ullamco
            aliquip anim ea occaecat in deserunt in veniam culpa tempor tempor
            aliquip cillum. Cupidatat ullamco veniam quis sunt amet deserunt
            irure laborum non consectetur ea. Aliqua aliquip occaecat anim anim
            et in cillum tempor ut in ex consectetur ad eu Lorem. Commodo nisi
            est occaecat magna do voluptate proident ut laborum minim esse
            cillum velit do.
          </Paragraph>
        </div>
      </div>
    </article>
  )
}

SectionCode.contextTypes = {
  config: React.PropTypes.object,
}

export default SectionCode
