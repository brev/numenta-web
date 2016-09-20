import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../../Form'


describe('<Form /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Form />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
