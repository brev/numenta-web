import React from 'react'
import renderer from 'react-test-renderer'

import Tag from '../../Tag'


describe('<Tag /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Tag>
        New!
      </Tag>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
