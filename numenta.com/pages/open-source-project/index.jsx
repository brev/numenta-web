import React from 'react'

import {getMainSectionComponents} from '../../utils/client/sections'
import PageOpensource from '../../components/Pages/Opensource'
import Section from '../../components/Section'

const Default = (<PageOpensource />)


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
      sections: getMainSectionComponents(Default),
    })
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
