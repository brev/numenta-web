import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../../__mocks__/reactContextMock'

import Glance from '../../Glance'


describe('<Glance /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const GlanceStubbed = stubContext(Glance, context)
    const component = renderer.create(
      <GlanceStubbed />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
