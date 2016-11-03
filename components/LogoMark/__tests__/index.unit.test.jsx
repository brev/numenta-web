import React from 'react'
import renderer from 'react-test-renderer'

import LogoMark from '../../LogoMark'


describe('LogoMark React component', () => {

  it('Renders Default correctly', () => {
    const component = renderer.create(
      <LogoMark />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Dark correctly', () => {
    const component = renderer.create(
      <LogoMark color="dark" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Lite correctly', () => {
    const component = renderer.create(
      <LogoMark color="lite" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
