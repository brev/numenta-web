import React from 'react'
import renderer from 'react-test-renderer'

import Pingdom from '../../Pingdom'


describe('<Pingdom /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Pingdom />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
