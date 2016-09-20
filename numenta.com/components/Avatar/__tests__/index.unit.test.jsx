import React from 'react'
import renderer from 'react-test-renderer'

import Avatar from '../../Avatar'


describe('Avatar React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Avatar name="Jeff Hawkins" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
