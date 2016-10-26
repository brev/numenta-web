// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'


const HtmlWrapper = ({route}) => {
  const post = route.page.data

  return (
    <div className="html">
      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
}

HtmlWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default HtmlWrapper
