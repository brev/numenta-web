import React from 'react'
import renderer from 'react-test-renderer'

import FormTextArea from '../../FormTextArea'


describe('<FormTextArea /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <FormTextArea name="field" placeholder="Default">
        Contents
      </FormTextArea>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
