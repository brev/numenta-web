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

import catchLinks from 'catch-links'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import url from 'url'

import {triggerGAnalyticsEvent} from '../../utils/client'

import styles from './index.css'


/**
 *
 */
class Markdown extends React.Component {

  static propTypes = {
    children: React.PropTypes.any.isRequired,
  }

  static contextTypes = {
    route: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  componentDidMount() {
    const {router} = this.context
    const {location} = global.window

    // Take over markdown local content links, local links now in Single-page
    //  app mode - also handling staging prefixLinks.
    catchLinks(this._markdown, (href) => {
      const target = url.parse(href)
      const newHref = prefixLink(href)
      if (!target.host && !target.hash && (
        target.pathname.match(/^\/assets\//) || target.pathname.match(/\.pdf$/)
      )) {
        triggerGAnalyticsEvent(newHref)
        location.href = newHref  // go to internal asset
      }
      else if (!target.host && target.hash && (
        target.pathname === location.pathname
      )) {
        location.hash = target.hash  // go to anchor on same page / browser
      }
      else {
        router.push(newHref)  // same site react-routed single-page
      }
    })
  }

  render() {
    const {children} = this.props

    return (
      <div
        className={styles.markdown}
        ref={(ref) => this._markdown = ref}
      >
        {children}
      </div>
    )
  }

}

export default Markdown
