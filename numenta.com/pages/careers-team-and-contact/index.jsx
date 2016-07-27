import React from 'react'

import {getMainSectionComponents} from '../../utils/client/sections'
import PageCareers from '../../components/Pages/Careers'
import Section from '../../components/Section'


/**
 *
 */
class CareersPage extends React.Component {

  constructor(props) {
    super(props)

    this._Default = (<PageCareers />)

    this.state = {
      sections: (
        <Section headline={true} open={true} title="Careers, Team & Contact">
          {this._Default}
        </Section>
      ),
    }
  }

  componentDidMount() {
    this.setState({  // eslint-disable-line react/no-did-mount-set-state
      sections: getMainSectionComponents(this._Default),
    })
  }

  componentWillUnmount() {
    this._Default = null
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

export default CareersPage
