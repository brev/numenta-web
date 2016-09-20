import React from 'react'
import renderer from 'react-test-renderer'

import List from '../../List'


describe('<List /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <List />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
