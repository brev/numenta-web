import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../../__mocks__/reactContextMock'

import PostListItem from '../../PostListItem'

const _post = {
  file: {
    dir: '/path/to/file/',
  },
  data: {},
  path: '',
}


describe('<PostListItem /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const PostListItemStubbed = stubContext(PostListItem, context)
    const component = renderer.create(
      <PostListItemStubbed post={_post} />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
