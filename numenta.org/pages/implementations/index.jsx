// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import {scrollToSection} from '../../utils/client'

import MainSections, {getNextSection} from '../_MainSections'
import NextSection from '../../components/NextSection'
import SectionImplement from './_Section'
import Section from '../../components/Section'

const Default = (<SectionImplement key="sectionImplement" />)
const title = 'Implementations'


/**
 * Implementations Page, MainSection wrapper React view component.
 */
class ImplementPage extends React.Component {

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

export default ImplementPage
