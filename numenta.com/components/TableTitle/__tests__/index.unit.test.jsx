import React from 'react'
import renderer from 'react-test-renderer'

import TableTitle from '../../TableTitle'


describe('TableTitle React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <TableTitle>
        Some Statistics
      </TableTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
