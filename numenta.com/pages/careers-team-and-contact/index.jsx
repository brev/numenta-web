import React from 'react'

import {getMainSectionComponents} from '../../utils/client/sections'

import SectionCareers from './_Section'
import Section from '../../components/Section'

const Default = (<SectionCareers />)


/**
 *
 */
class CareersPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Careers, Team & Contact">
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

export default CareersPage
