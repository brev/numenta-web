import React from 'react'
import renderer from 'react-test-renderer'

import TableHead from '../../TableHead'
import TableRow from '../../TableRow'
import TableTitle from '../../TableTitle'


describe('<TableHead /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <TableHead>
        <TableRow>
          <TableTitle>
            Table Title 1
          </TableTitle>
          <TableTitle>
            Table Title 2
          </TableTitle>
        </TableRow>
      </TableHead>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
