import React from 'react'

import MainSections, {getNextSection} from './_MainSections'

import NextSection from '../components/NextSection'
import SectionHome from './_Section'
import Section from '../components/Section'

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
          title="Leading the New Era of Machine Intelligence"
        >
          {Default}
          <NextSection {...next} />
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
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
