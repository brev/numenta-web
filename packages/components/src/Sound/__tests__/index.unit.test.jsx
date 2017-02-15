import React from 'react'
import renderer from 'react-test-renderer'

import Sound from '../../Sound'


describe('Sound React view component', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <Sound
        image="filename.ext"
        respond="mw"
        time="02:23"
        title="Sound Title"
        type="soundcloud"
        url="https://soundcloud.com/user/clip"
      />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  // @TODO test interaction

})
