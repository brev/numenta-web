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
