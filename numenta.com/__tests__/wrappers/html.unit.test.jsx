import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../__mocks__/reactContextMock'

import Html from '../../wrappers/html'

const route = {
  page: {
    data: {},
    file: {},
    path: '',
  },
}


describe('HTML Wrapper React component', () => {

  it('Renders correctly', () => {
    const HtmlStubbed = stubContext(Html, context)
    const component = renderer.create(
      <HtmlStubbed route={route}>
        <div>Hello</div>
      </HtmlStubbed>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
