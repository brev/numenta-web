import React from 'react'
import renderer from 'react-test-renderer'

import IconMarker from '../../IconMarker'


describe('IconMarker React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <IconMarker>
        Hello
      </IconMarker>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
