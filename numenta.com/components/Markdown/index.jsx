import catchLinks from 'catch-links'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import url from 'url'

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
    let {location} = global.window

    // Take over markdown local content links, local links now in Single-page
    //  app mode - also handling staging prefixLinks.
    catchLinks(this._markdown, (href) => {
      const target = url.parse(href)
      if (
        !target.host &&
        !target.hash &&
        target.pathname.match(/^\/assets\//)
      ) {
        location = prefixLink(href)  // go to external asset
      }
      else if (
        !target.host &&
        target.hash &&
        target.pathname === location.pathname
      ) {
        location.hash = target.hash  // go to anchor on same page / browser
      }
      else {
        router.push(prefixLink(href))  // same site react-routed single-page
      }
      return
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
