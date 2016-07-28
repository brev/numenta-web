import React from 'react'

import {getMainSectionComponents} from '../../utils/client/sections'
import SectionAnomaly from './_Section'
import Section from '../../components/Section'

const Default = (<SectionAnomaly />)


/**
 *
 */
class AnomalyBenchmarkPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Anomaly Detection Benchmark">
        {Default}
      </Section>
    ),
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
      sections: getMainSectionComponents(Default),
    })
  }

  componentWillUnmount() {
    this.setState({sections: []})
  }

  render() {
    const {sections} = this.state

    return (
      <div>
        {sections}
      </div>
    )
  }

}

export default AnomalyBenchmarkPage
