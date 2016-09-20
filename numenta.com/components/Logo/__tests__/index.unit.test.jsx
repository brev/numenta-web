import React from 'react'
import renderer from 'react-test-renderer'

import Logo from '../../Logo'


describe('<Logo /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Logo />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
