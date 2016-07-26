import Helmet from 'react-helmet'
import React from 'react'


const MarkdownWrapper = ({route}) => {
  const post = route.page.data
  const {body, title} = post

  return (
    <div className="markdown">
      <Helmet title={title} />
      <h1>
        {title}
      </h1>
      <div dangerouslySetInnerHTML={{__html: body}} />
    </div>
  )
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default MarkdownWrapper
