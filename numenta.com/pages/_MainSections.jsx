// Numenta company website source code. Copyright © 2016 Numenta.
// Full details in LICENSE.txt, or contact us at <http://numenta.com>.
// This program is free software: you can redistribute it and/or modify it under
// the terms of the GNU Affero General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option) any
// later version. This program is distributed in the hope that it will be
// useful, but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero
// General Public License for more details. You should have received a copy of
// the GNU Affero General Public License along with this program. If not, see
// <https://www.gnu.org/licenses/agpl.html>.

import {findIndex} from 'lodash'
import React from 'react'

import SectionAnomaly from './anomaly-detection-benchmark/_Section'
import SectionApplications from './applications/_Section'
import SectionBusiness from './business-strategy-and-ip/_Section'
import SectionCareers from './careers-and-team/_Section'
import SectionContact from './contact/_Section'
import SectionHome from './_Section'
import SectionMission from './mission-and-history/_Section'
import SectionOpensource from './open-source-community/_Section'
import SectionPapers from './papers-videos-and-more/_Section'
import SectionPartners from './partners/_Section'
import SectionTechnology from './technology-overview/_Section'

import Section from '../components/Section'

const mainSectionList = [
  {
    component: <SectionHome key="sectionHome" />,
    title: 'Leading the New Era of Machine Intelligence',
    url: '/',
  },
  {
    component: <SectionMission key="sectionMission" />,
    title: 'Mission & History',
    url: '/mission-and-history/',
  },
  {
    component: <SectionTechnology key="sectionTechnology" />,
    title: 'Technology Overview',
    url: '/technology-overview/',
  },
  {
    component: <SectionOpensource key="sectionOpensource" />,
    title: 'Open Source Community',
    url: '/open-source-community/',
  },
  {
    component: <SectionApplications key="sectionApplications" />,
    title: 'Applications',
    url: '/applications/',
  },
  {
    component: <SectionPartners key="sectionPartners" />,
    title: 'Partners',
    url: '/partners/',
  },
  {
    component: <SectionBusiness key="sectionBusiness" />,
    title: 'Business Strategy & IP',
    url: '/business-strategy-and-ip/',
  },
  {
    component: <SectionAnomaly key="sectionAnomaly" />,
    title: 'Anomaly Detection Benchmark',
    url: '/anomaly-detection-benchmark/',
  },
  {
    component: <SectionPapers key="sectionResources" />,
    title: 'Papers, Videos & More',
    url: '/papers-videos-and-more/',
  },
  {
    component: <SectionCareers key="sectionCareers" />,
    title: 'Careers & Team',
    url: '/careers-and-team/',
  },
  {
    component: <SectionContact key="sectionContact" />,
    title: 'Contact',
    url: '/contact/',
  },
]

/**
 *
 * @public
 */
function getNextSection(current) {
  const nextIndex = findIndex(mainSectionList, (item) => (
    current.key === item.component.key
  ))

  if (nextIndex >= 0) {
    return mainSectionList[nextIndex + 1]
  }
  return null
}


/**
 *
 */
const MainSections = ({current}) => {
  const details = {}
  const mainComponents = mainSectionList.map(({component, title, url}) => {
    const {key} = component
    details[key] = {title, url}
    return component
  })
  const childrenWithProps = React.Children.map(
    mainComponents,
    (Component) => {
      const {key} = Component
      const {title, url} = details[key]
      const isHome = (key === 'sectionHome')
      const isStored = (global.window.sessionStorage.getItem(url) === 'open')
      const open = (key === current.key) || isHome || isStored
      return (
        <Section
          headline={isHome}
          id={key}
          key={key}
          open={open}
          title={title}
          url={url}
        >
          {Component}
        </Section>
      )
    }
  )

  return (
    <div>
      {childrenWithProps}
    </div>
  )
}

MainSections.propTypes = {
  current: React.PropTypes.element.isRequired,
}

export {getNextSection, MainSections as default}
