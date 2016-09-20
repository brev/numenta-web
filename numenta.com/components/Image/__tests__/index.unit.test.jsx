import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../../Image'


describe('<Image /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Image />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
