import React from 'react'
import renderer from 'react-test-renderer'

import FormCheckbox from '../../FormCheckbox'


describe('<FormCheckbox /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormCheckbox name="field" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
