import React from 'react'
import renderer from 'react-test-renderer'

import ListItem from '../../ListItem'


describe('ListItem React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ListItem>
        List Item 1
      </ListItem>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
