import React from 'react'

import SectionAnomaly from './anomaly-detection-benchmark/_Section'
import SectionApplications from './applications/_Section'
import SectionBusiness from './business-strategy-and-ip/_Section'
import SectionCareers from './careers-team-and-contact/_Section'
import SectionIndex from './_Section'
import SectionMission from './mission-and-history/_Section'
import SectionOpensource from './open-source-community/_Section'
import SectionPapers from './papers-videos-and-more/_Section'
import SectionPartners from './partners/_Section'
import SectionTechnology from './technology-overview/_Section'

import Section from '../components/Section'

const mainSectionList = [
  {
    component: <SectionIndex />,
    title: 'Leading the New Era of Machine Intelligence',
    url: '/',
  },
  {
    component: <SectionMission />,
    title: 'Mission & History',
    url: '/mission-and-history/',
  },
  {
    component: <SectionTechnology />,
    title: 'Technology Overview',
    url: '/technology-overview/',
  },
  {
    component: <SectionOpensource />,
    title: 'Open Source Community',
    url: '/open-source-community/',
  },
  {
    component: <SectionApplications />,
    title: 'Applications',
    url: '/applications/',
  },
  {
    component: <SectionPartners />,
    title: 'Partners',
    url: '/partners/',
  },
  {
    component: <SectionBusiness />,
    title: 'Business Strategy & IP',
    url: '/business-strategy-and-ip/',
  },
  {
    component: <SectionAnomaly />,
    title: 'Anomaly Detection Benchmark',
    url: '/anomaly-detection-benchmark/',
  },
  {
    component: <SectionPapers />,
    title: 'Papers, Videos & More',
    url: '/papers-videos-and-more/',
  },
  {
    component: <SectionCareers />,
    title: 'Careers, Team & Contact',
    url: '/careers-team-and-contact/',
  },
]


/**
 * List of Homepage/Mainpage Section/Page's in order
 * @param {Object} [current] - Current React Element, to alternate section
 *  title display.
 * @returns {Array} - Array of React Component node objects.
 */
const MainSections = ({current}) => {
  const details = {}
  const mainComponents = mainSectionList.map((item) => {
    const {component, title, url} = item
    const key = component.type.name
    details[key] = {title, url}
    return component
  })
  const childrenWithProps = React.Children.map(mainComponents, (Component) => {
    const key = Component.type.name
    const {title, url} = details[key]
    const isStored = (global.window.sessionStorage.getItem(url) === 'open')
    const open = (key === current.type.name) || isStored
    const headline = open && (url === '/')
    return (
      <Section
        headline={headline}
        id={key}
        key={key}
        open={open}
        title={title}
        url={url}
      >
        {Component}
      </Section>
    )
  })

  return (
    <div>
      {childrenWithProps}
    </div>
  )
}

MainSections.propTypes = {
  current: React.PropTypes.element.isRequired,
}

export default MainSections
