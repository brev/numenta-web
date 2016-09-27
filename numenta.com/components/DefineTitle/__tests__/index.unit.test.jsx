import React from 'react'
import renderer from 'react-test-renderer'

import DefineItem from '../../DefineItem'
import DefineList from '../../DefineList'
import DefineTitle from '../../DefineTitle'


describe('<DefineTitle /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <DefineList>
        <DefineTitle>
          Title 1
        </DefineTitle>
        <DefineItem>
          Item 1
        </DefineItem>
        <DefineTitle>
          Title 2
        </DefineTitle>
        <DefineItem>
          Item 2
        </DefineItem>
      </DefineList>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
