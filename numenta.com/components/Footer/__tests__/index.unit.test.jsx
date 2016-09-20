import React from 'react'
import renderer from 'react-test-renderer'

import Footer from '../../Footer'


describe('<Footer /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Footer />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
