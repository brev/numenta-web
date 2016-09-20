import React from 'react'
import renderer from 'react-test-renderer'

import Layout from '../../Layout'


describe('<Layout /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Layout />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
