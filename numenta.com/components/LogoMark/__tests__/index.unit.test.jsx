import React from 'react'
import renderer from 'react-test-renderer'

import LogoMark from '../../LogoMark'


describe('<LogoMark /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <LogoMark />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
