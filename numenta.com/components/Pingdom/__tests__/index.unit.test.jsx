import React from 'react'
import renderer from 'react-test-renderer'
import stubContext from 'react-stub-context'

import context from '../../../__mocks__/reactContextMock'

import Pingdom from '../../Pingdom'


describe('<Pingdom /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const PingdomStubbed = stubContext(Pingdom, context)
    const component = renderer.create(
      <PingdomStubbed id="abcd1234" />
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
