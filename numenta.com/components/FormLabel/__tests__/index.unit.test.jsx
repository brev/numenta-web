import React from 'react'
import renderer from 'react-test-renderer'

import FormLabel from '../../FormLabel'


describe('<FormLabel /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormLabel />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
