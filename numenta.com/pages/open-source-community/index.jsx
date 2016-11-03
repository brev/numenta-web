// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import NextSection from '../../../components/NextSection'
import {scrollToSection} from '../../../utils/client'
import Section from '../../../components/Section'

import MainSections, {getNextSection} from '../_MainSections'
import SectionOpensource from './_Section'

const Default = (<SectionOpensource key="sectionOpensource" />)
const title = 'Open Source Community'


/**
 * Open Source Community page and MainSection wrapper - React view component.
 */
class OpenSourcePage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section headline={true} open={true} title={title}>
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({
      sections: (<MainSections current={Default} />),
    })
  }

  componentDidUpdate() {
    scrollToSection(global.document.getElementById(Default.key))
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

export default OpenSourcePage
