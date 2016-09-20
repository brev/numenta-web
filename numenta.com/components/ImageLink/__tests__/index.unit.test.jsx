import React from 'react'
import renderer from 'react-test-renderer'

import ImageLink from '../../ImageLink'


describe('<ImageLink /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ImageLink />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
