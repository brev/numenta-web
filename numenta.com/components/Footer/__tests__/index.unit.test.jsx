import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import {getConfig} from '../../../utils/shared'

import Footer from '../../Footer'


describe('<Footer /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const context = {config: getConfig()}
    const FooterStubbed = stubContext(Footer, context)
    const component = renderer.create(
      <FooterStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
