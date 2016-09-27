import React from 'react'
import renderer from 'react-test-renderer'

import TextLink from '../../TextLink'


describe('TextLink React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <TextLink to="http://numenta.com">
        Numenta Homepage
      </TextLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
