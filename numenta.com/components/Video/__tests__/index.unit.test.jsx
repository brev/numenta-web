import React from 'react'
import renderer from 'react-test-renderer'

import Video from '../../Video'


describe('<Video /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Video
        image="filename.ext"
        respond="mw"
        time="02:23"
        title="Video Title"
        type="youtube"
        videoid="abcd1234"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
