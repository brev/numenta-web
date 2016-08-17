import Helmet from 'react-helmet'
import React from 'react'

import {scrollToSection} from '../../utils/client'

import MainSections from '../_MainSections'
import SectionCareers from './_Section'
import Section from '../../components/Section'

const Default = (<SectionCareers />)
const title = 'Careers, Team & Contact'


/**
 *
 */
class CareersPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title={title}>
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
    return (
      <div>
        <Helmet title={title} />
        {sections}
      </div>
    )
  }
}

export default CareersPage
