import React from 'react'
import renderer from 'react-test-renderer'

import Code from '../../Code'


describe('Code React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Code>const KEY = 'id_123'</Code>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
