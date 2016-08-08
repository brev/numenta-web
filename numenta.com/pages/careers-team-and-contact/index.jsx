import React from 'react'

import {scrollTo} from '../../utils/client/sections'

import MainSections from '../_MainSections'
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
      sections: (<MainSections current={Default} />),
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
    return sections
  }
}

export default CareersPage
