import React from 'react'
import renderer from 'react-test-renderer'

import Glance from '../../Glance'


describe('<Glance /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Glance />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
