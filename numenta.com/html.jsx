import Helmet from 'react-helmet'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import {stamp} from './utils/shared'


/**
 *
 */
const HtmlDocument = ({body}) => {
  const {htmlAttributes, link, meta, script, title} = Helmet.rewind()
  const attrs = htmlAttributes.toComponent()

  // Gatsby provides HTML5 !doctype at render-time
  return (
    <html {...attrs}>
      <head>
        {title.toComponent()}
        {meta.toComponent()}
        {link.toComponent()}
      </head>
      <body className="body">
        <div id="react-mount" dangerouslySetInnerHTML={{__html: body}} />
        <script src={prefixLink(stamp('/bundle.js'))} />
      </body>
    </html>
  )
}

HtmlDocument.propTypes = {
  body: React.PropTypes.string.isRequired,
}

export default HtmlDocument
