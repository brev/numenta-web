import Helmet from 'react-helmet'
import injectTapEventPlugin from 'react-tap-event-plugin'
import moment from 'moment'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import Layout from '../components/Layout'
import {getConfig, getVersion, stamp} from '../utils/universal'

import '../static/assets/css/fonts.css'
import 'tachyons-base/css/tachyons-base.css'

const config = getConfig()


/**
 *
 */
class Template extends React.Component {

  static propTypes = {
    children: React.PropTypes.any.isRequired,
    location: React.PropTypes.object.isRequired,
    route: React.PropTypes.object.isRequired,
  }

  static childContextTypes = {
    config: React.PropTypes.object,
    route: React.PropTypes.object,
  }

  getChildContext() {
    const {route} = this.props
    return {config, route}
  }

  componentDidMount() {
    if (window) injectTapEventPlugin()  // remove @ React 1.0
  }

  render() {
    const {children} = this.props
    const {description, siteHost, siteTitle} = config
    const lang = 'en'  // @TODO i18n l10n
    const now = moment().toString()
    const title = `${siteTitle} — ${description}`
    const titleForm = `%s | ${siteHost}`
    const ver = getVersion()

    const attrs = {lang, amp: undefined}
    const links = [{
      rel: 'shortcut icon',
      href: prefixLink(stamp('/assets/icons/favicon.ico')),
    }]
    const meta = [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1.0'},
      {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      {name: 'author', content: `${siteTitle}`},
      {name: 'description', content: title},
      {name: 'generator', content: `© ${siteHost} v${ver} ${now} Gatsby.js`},
      {name: 'keywords', content: '@TODO,TODO,TODO'},
    ]

    if (process.env.NODE_ENV === 'production') {
      links.push({rel: 'stylesheet', href: prefixLink(stamp('/styles.css'))})
    }

    return (
      <Layout>
        <Helmet
          defaultTitle={title}
          htmlAttributes={attrs}
          link={links}
          meta={meta}
          titleTemplate={titleForm}
        />
        {children}
      </Layout>
    )
  }

}

export default Template
