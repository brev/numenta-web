import React from 'react'
import renderer from 'react-test-renderer'

import TableHead from '../../TableHead'


describe('<TableHead /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <TableHead>
        Table Heading
      </TableHead>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
