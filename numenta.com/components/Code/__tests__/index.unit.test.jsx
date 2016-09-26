import React from 'react'
import renderer from 'react-test-renderer'

import Code from '../../Code'


describe('<Code /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Code>const KEY = id123</Code>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
