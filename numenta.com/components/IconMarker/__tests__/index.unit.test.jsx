import React from 'react'
import renderer from 'react-test-renderer'

import IconMarker from '../../IconMarker'


describe('<IconMarker /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <IconMarker />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
