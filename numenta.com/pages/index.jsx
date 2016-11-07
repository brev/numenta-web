// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import NextSection from '../../components/NextSection'
import Section from '../../components/Section'

import MainSections, {getNextSection} from './_MainSections'
import SectionHome from './_Section'

import styles from './index.css'

const Default = (<SectionHome key="sectionHome" />)


/**
 * Home Page and MainSection wrapper - React view component.
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
          title="Leading the New Era of Machine Intelligence"
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
