import React from 'react'
import renderer from 'react-test-renderer'

import SearchResult from '../../SearchResult'


describe('<SearchResult /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <SearchResult
        query="query"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
