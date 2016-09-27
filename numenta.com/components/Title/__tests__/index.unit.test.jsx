import React from 'react'
import renderer from 'react-test-renderer'

import Title from '../../Title'


describe('Title React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Title>
        Important Text
      </Title>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
