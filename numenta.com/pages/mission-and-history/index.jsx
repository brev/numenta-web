import React from 'react'

import {getMainSectionComponents} from '../../utils/client/sections'
import PageMission from '../../components/Pages/Mission'
import Section from '../../components/Section'

const Default = (<PageMission />)


/**
 *
 */
class MissionPage extends React.Component {

  state = {
    sections: (
      <Section headline={true} open={true} title="Mission & History">
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

export default MissionPage
