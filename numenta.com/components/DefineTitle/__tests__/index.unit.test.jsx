import React from 'react'
import renderer from 'react-test-renderer'

import DefineTitle from '../../DefineTitle'


describe('<DefineTitle /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <DefineTitle />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
