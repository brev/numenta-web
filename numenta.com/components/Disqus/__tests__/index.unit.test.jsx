import React from 'react'
import renderer from 'react-test-renderer'

import Disqus from '../../Disqus'


describe('<Disqus /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Disqus shortname="disqus" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
