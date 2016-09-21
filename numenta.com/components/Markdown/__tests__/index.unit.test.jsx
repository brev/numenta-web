import React from 'react'
import renderer from 'react-test-renderer'

import Markdown from '../../Markdown'


describe('<Markdown /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Markdown>
        ## Heading Level 2
      </Markdown>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
