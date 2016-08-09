import React from 'react'

import {scrollToSection} from '../../utils/client'

import MainSections from '../_MainSections'
import SectionPapers from './_Section'
import Section from '../../components/Section'

const Default = (<SectionPapers />)


/**
 *
 */
class PapersPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Papers, Videos & More">
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

export default PapersPage
