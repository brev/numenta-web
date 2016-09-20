import React from 'react'
import renderer from 'react-test-renderer'

import NextSection from '../../NextSection'


describe('<NextSection /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <NextSection />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
