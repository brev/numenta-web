import React from 'react'

import {scrollToSection} from '../../utils/client'

import MainSections from '../_MainSections'
import SectionBusiness from './_Section'
import Section from '../../components/Section'

const Default = (<SectionBusiness />)


/**
 *
 */
class BusinessPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Business Strategy & IP">
        {Default}
      </Section>
    ),
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollToSection(Default)
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return sections
  }
}

export default BusinessPage