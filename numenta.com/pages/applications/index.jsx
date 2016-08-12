import React from 'react'

import {scrollToSection} from '../../utils/client'

import MainSections from '../_MainSections'
import SectionApplications from './_Section'
import Section from '../../components/Section'

const Default = (<SectionApplications />)


/**
 *
 */
class ApplicationsPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Applications">
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

export default ApplicationsPage