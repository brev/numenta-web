import React from 'react'
import renderer from 'react-test-renderer'

import TextLink from '../../TextLink'


describe('<TextLink /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <TextLink href="http://numenta.com">
        Numenta Homepage
      </TextLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
