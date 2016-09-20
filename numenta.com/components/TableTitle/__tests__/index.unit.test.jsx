import React from 'react'
import renderer from 'react-test-renderer'

import TableTitle from '../../TableTitle'


describe('<TableTitle /> React component unit test suite', () => {

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
