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


/**
 * List of Homepage/Mainpage Section/Page's in order
 * @param {Object} [current] - Current React Element, to alternate section
 *  title display.
 * @returns {Array} - Array of React Component node objects.
 */
const MainSections = ({current}, {config}) => {
  const {links} = config
  const details = {}
  const mainSectionList = [
    {
      component: <SectionHome key="sectionHome" />,
      title: 'Leading the New Era of Machine Intelligence',
      url: links.in.home,
    },
    {
      component: <SectionMission key="sectionMission" />,
      title: 'Mission & History',
      url: links.in.mission,
    },
    {
      component: <SectionTechnology key="sectionTechnology" />,
      title: 'Technology Overview',
      url: links.in.technology,
    },
    {
      component: <SectionOpensource key="sectionOpensource" />,
      title: 'Open Source Community',
      url: links.in.opensource,
    },
    {
      component: <SectionApplications key="sectionApplications" />,
      title: 'Applications',
      url: links.in.applications,
    },
    {
      component: <SectionPartners key="sectionPartners" />,
      title: 'Partners',
      url: links.in.partners,
    },
    {
      component: <SectionBusiness key="sectionBusiness" />,
      title: 'Business Strategy & IP',
      url: links.in.business,
    },
    {
      component: <SectionAnomaly key="sectionAnomaly" />,
      title: 'Anomaly Detection Benchmark',
      url: links.in.anomaly,
    },
    {
      component: <SectionPapers key="sectionResources" />,
      title: 'Papers, Videos & More',
      url: links.in.resources,
    },
    {
      component: <SectionCareers key="sectionCareers" />,
      title: 'Careers, Team & Contact',
      url: links.in.careers,
    },
  ]
  const mainComponents = mainSectionList.map(({component, title, url}) => {
    const {key} = component
    details[key] = {title, url}
    return component
  })
  const childrenWithProps = React.Children.map(mainComponents, (Component) => {
    const {key} = Component
    const {title, url} = details[key]
    const isStored = (global.window.sessionStorage.getItem(url) === 'open')
    const open = (key === current.key) || isStored
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

MainSections.contextTypes = {
  config: React.PropTypes.object,
}

export default MainSections
