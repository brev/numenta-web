import React from 'react'

import {getMainSectionComponents} from '../../utils/client/sections'

import SectionPartners from './_Section'
import Section from '../../components/Section'

const Default = (<SectionPartners />)


/**
 *
 */
class PartnersPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Partners">
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

export default PartnersPage
