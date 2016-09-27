import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../../Image'


describe('Image React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Image alt="Clown" src="clown.png" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
