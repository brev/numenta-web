import React from 'react'
import renderer from 'react-test-renderer'

import PostListRow from '../../PostListRow'


describe('<PostListRow /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <PostListRow />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
