import React from 'react'
import renderer from 'react-test-renderer'

import Section from '../../Section'


describe('<Section /> React component unit test suite', () => {

  it('Renders Closed with No Headline correctly', () => {
    const component = renderer.create(
      <Section
        headline={false}
        open={false}
        title="Section Title"
      >
        Section Content
      </Section>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Closed with Headline correctly', () => {
    const component = renderer.create(
      <Section
        headline={true}
        open={false}
        title="Section Title"
      >
        Section Content
      </Section>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Open with No Headline correctly', () => {
    const component = renderer.create(
      <Section
        headline={false}
        open={true}
        title="Section Title"
      >
        Section Content
      </Section>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Renders Open with Headline correctly', () => {
    const component = renderer.create(
      <Section
        headline={true}
        open={true}
        title="Section Title"
      >
        Section Content
      </Section>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

})
