import React from 'react'
import renderer from 'react-test-renderer'

import Paragraph from '../../Paragraph'


describe('<Paragraph /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Paragraph name="Jeff Hawkins" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
