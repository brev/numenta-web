import React from 'react'
import renderer from 'react-test-renderer'

import SectionTitle from '../../SectionTitle'


describe('<SectionTitle /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <SectionTitle>
        Section Title
      </SectionTitle>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
