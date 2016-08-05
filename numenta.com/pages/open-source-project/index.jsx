import React from 'react'

import {getMainSections, scrollTo} from '../../utils/client/sections'

import SectionOpensource from './_Section'
import Section from '../../components/Section'

const Default = (<SectionOpensource />)


/**
 *
 */
class OpenSourcePage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Open Source Project">
        {Default}
      </Section>
    ),
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
      sections: getMainSections(Default),
    })
  }

  componentDidUpdate() {
    scrollTo(Default)
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state

    return (
      <div>
        {sections}
      </div>
    )
  }

}

export default OpenSourcePage
