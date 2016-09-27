import React from 'react'
import renderer from 'react-test-renderer'

import Button from '../../Button'


describe('Button React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Button type="submit">
        Submit
      </Button>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
