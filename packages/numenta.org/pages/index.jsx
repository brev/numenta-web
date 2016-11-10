// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import NextSection from 'numenta-web-shared-components/NextSection'
import Section from 'numenta-web-shared-components/Section'

import MainSections, {getNextSection} from './_MainSections'
import SectionHome from './_Section'
import styles from './index.css'

const Default = (<SectionHome key="sectionHome" />)


/**
 *
 */
class HomePage extends React.Component {

  constructor(props) {
    super(props)
    const next = getNextSection(Default)

    this.state = {
      sections: (
        <Section
          headline={true}
          open={true}
          title="Numenta HTM Community"
        >
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

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state
    return (
      <div className={styles.page}>
        {sections}
      </div>
    )
  }

}

export default HomePage
