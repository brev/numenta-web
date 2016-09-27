import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../../Image'
import ImageLink from '../../ImageLink'


describe('ImageLink React component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ImageLink to="http://numenta.com">
        <Image alt="Zebra" src="zebra.png" />
      </ImageLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
