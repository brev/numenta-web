import React from 'react'

import SectionAnomaly from '../../pages/anomaly-detection-benchmark/_Section'
import SectionApplications from '../../pages/applications/_Section'
import SectionBusiness from '../../pages/business-strategy-and-ip/_Section'
import SectionCareers from '../../pages/careers-team-and-contact/_Section'
import SectionIndex from '../../pages/_Section'
import SectionMission from '../../pages/mission-and-history/_Section'
import SectionOpensource from '../../pages/open-source-project/_Section'
import SectionPapers from '../../pages/papers-videos-and-more/_Section'
import SectionPartners from '../../pages/partners/_Section'
import SectionTechnology from '../../pages/technology-overview/_Section'

import Section from '../../components/Section'

const mainSections = [
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
    title: 'Open Source Project',
    url: '/open-source-project/',
  },
  {
    component: <SectionApplications />,
    title: 'Applications',
    url: '/applications/',
  },
  {
    component: <SectionAnomaly />,
    title: 'Anomaly Detection Benchmark',
    url: '/anomaly-detection-benchmark/',
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
 * List of Homepage/Mainpage Section/Page's in order, used to load on client.
 * @param {Object} [current] - Current node, to alternate section title display.
 * @returns {Array} - Array of React Component node objects.
 */
export function getMainSections(current) {
  const details = {}
  const mainComponents = mainSections.map((item) => {
    const {component, title, url} = item
    const key = component.type.name
    details[key] = {title, url}

    return component
  })
  const childrenWithProps = React.Children.map(mainComponents, (Component) => {
    const key = Component.type.name
    const {title, url} = details[key]
    const open = (key === current.type.name)
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

  return childrenWithProps
}

/**
 *
 */
export function scrollTo(current, pad = -60) {
  const element = global.document.getElementById(current.type.name)
  const {top} = element.getBoundingClientRect()

  if (top) global.window.scroll(0, top + pad)
}
