import React from 'react'
import renderer from 'react-test-renderer'

import SocialMedia from '../../SocialMedia'


describe('<SocialMedia /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <SocialMedia />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
