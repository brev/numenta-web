import React from 'react'
import renderer from 'react-test-renderer'

import FormRow from '../../FormRow'


describe('<FormRow /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormRow />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
