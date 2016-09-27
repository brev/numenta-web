import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../../__mocks__/reactContextMock'

import Footer from '../../Footer'


describe('<Footer /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const FooterStubbed = stubContext(Footer, context)
    const component = renderer.create(
      <FooterStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
