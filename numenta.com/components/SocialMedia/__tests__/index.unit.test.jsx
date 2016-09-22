import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import {getConfig} from '../../../utils/shared'

import SocialMedia from '../../SocialMedia'


describe('<SocialMedia /> React component unit test suite', () => {

  it('Renders correctly', () => {
    // @TODO refactor to shared context mock/stub/whatever
    const context = {config: getConfig()}
    const SocialMediaStubbed = stubContext(SocialMedia, context)
    const component = renderer.create(
      <SocialMediaStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
