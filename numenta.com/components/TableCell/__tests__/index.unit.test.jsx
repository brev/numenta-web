import React from 'react'
import renderer from 'react-test-renderer'

import TableCell from '../../TableCell'


describe('<TableCell /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <TableCell>Cell 1</TableCell>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
