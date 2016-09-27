import React from 'react'
import renderer from 'react-test-renderer'

import Image from '../../Image'
import ImageLink from '../../ImageLink'


describe('<ImageLink /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ImageLink to="http://numenta.com">
        <Image src="zebra.png" title="Zebra Image" />
      </ImageLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
