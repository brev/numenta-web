import React from 'react'
import renderer from 'react-test-renderer'

import ListOrder from '../../ListOrder'


describe('<ListOrder /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ListOrder />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
