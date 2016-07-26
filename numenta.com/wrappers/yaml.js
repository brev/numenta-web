import React from 'react'
import yaml from 'js-yaml'


const YamlWrapper = ({route}) => {
  const data = route.page.data

  return (
    <div className="yaml">
      <h1>
        {data.title}
      </h1>
      <p>
        Raw view of yaml file
      </p>
      <pre dangerouslySetInnerHTML={{__html: yaml.safeDump(data)}} />
    </div>
  )
}

YamlWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default YamlWrapper
