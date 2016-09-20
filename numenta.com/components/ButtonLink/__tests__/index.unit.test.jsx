import React from 'react'
import renderer from 'react-test-renderer'

import ButtonLink from '../../ButtonLink'


describe('<ButtonLink /> React component unit test suite', () => {

  it('Renders correctly', () => {
    const component = renderer.create(
      <ButtonLink to="http://numenta.com">
        Visit Numenta
      </ButtonLink>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
