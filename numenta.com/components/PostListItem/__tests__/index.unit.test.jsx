import React from 'react'
import renderer from 'react-test-renderer'

import PostListItem from '../../PostListItem'


describe('<PostListItem /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <PostListItem />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
