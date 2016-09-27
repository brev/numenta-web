import React from 'react'
import renderer from 'react-test-renderer'

import FormInput from '../../FormInput'


describe('<FormInput /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormInput name="field" type="text" value="contents" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
