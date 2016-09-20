import React from 'react'
import renderer from 'react-test-renderer'

import DefineList from '../../DefineList'


describe('<DefineList /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <DefineList />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
