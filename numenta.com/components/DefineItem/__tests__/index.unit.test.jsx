import React from 'react'
import renderer from 'react-test-renderer'

import DefineItem from '../../DefineItem'


describe('DefineItem React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <DefineItem>Item</DefineItem>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
