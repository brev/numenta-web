// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'
import {trims} from 'numenta-web-shared-utils/shared'

import DefineItem from '../DefineItem'
import DefineList from '../DefineList'
import DefineTitle from '../DefineTitle'
import Spacer from '../Spacer'
import Tag from '../Tag'
import TextLink from '../TextLink'

import styles from './index.css'


/**
 * At-A-Glance React view component. Quick Details about the company/site.
 */
const Glance = ({children, head}, context) => {
  const {config} = context
  const {links} = config

  return (
    <aside className={styles.glance}>
      <div>{head}</div>
      <DefineList direction="horizontal">
        {children}
      </DefineList>
    </aside>
  )
}

Glance.contextTypes = {
  config: React.PropTypes.object,
}

Glance.propTypes = {
  children: React.PropTypes.array.isRequired,
  head: React.PropTypes.element.isRequired,
}

export default Glance
