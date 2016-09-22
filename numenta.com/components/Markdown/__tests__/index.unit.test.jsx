import React from 'react'
import TestUtils from 'react-addons-test-utils'

import Markdown from '../../Markdown'


describe('<Markdown /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = TestUtils.renderIntoDocument(
      <Markdown>
        Marked Down Text
      </Markdown>
    )
    const element = component._markdown  // get ref
    expect(element.textContent).toEqual('Marked Down Text')
  })

  // @TODO more in depth testing below...
  //
  // it('Mounts correctly', () => {
  //   TestUtils.Simulate.change(
  //     TestUtils.findRenderedDOMComponentWithTag(component, 'input')
  //   )
  //   expect(checkboxNode.textContent).toEqual('On')
  // })

})
