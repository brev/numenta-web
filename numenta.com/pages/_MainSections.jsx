import {findIndex} from 'lodash'
import React from 'react'

import SectionAnomaly from './anomaly-detection-benchmark/_Section'
import SectionApplications from './applications/_Section'
import SectionBusiness from './business-strategy-and-ip/_Section'
import SectionCareers from './careers-team-and-contact/_Section'
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
    title: 'Careers, Team & Contact',
    url: '/careers-team-and-contact/',
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
