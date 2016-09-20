import React from 'react'
import renderer from 'react-test-renderer'

import Spacer from '../../Spacer'


describe('<Spacer /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Spacer />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
