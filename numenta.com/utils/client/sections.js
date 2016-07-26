import React from 'react'

import Section from '../../components/Section'

import Anomaly from '../../components/Pages/Anomaly'
import Applications from '../../components/Pages/Applications'
import Business from '../../components/Pages/Business'
import Careers from '../../components/Pages/Careers'
import Index from '../../components/Pages/Index'
import Mission from '../../components/Pages/Mission'
import Opensource from '../../components/Pages/Opensource'
import Papers from '../../components/Pages/Papers'
import Partners from '../../components/Pages/Partners'
import Technology from '../../components/Pages/Technology'

const mainSections = [
  {
    component: <Index />,
    title: 'Leading the New Era of Machine Intelligence',
    url: '/',
  },
  {
    component: <Mission />,
    title: 'Mission & History',
    url: '/mission-and-history/',
  },
  {
    component: <Technology />,
    title: 'Technology Overview',
    url: '/technology-overview/',
  },
  {
    component: <Opensource />,
    title: 'Open Source Project',
    url: '/open-source-project/',
  },
  {
    component: <Applications />,
    title: 'Applications',
    url: '/applications/',
  },
  {
    component: <Anomaly />,
    title: 'Anomaly Detection Benchmark',
    url: '/anomaly-detection-benchmark/',
  },
  {
    component: <Partners />,
    title: 'Partners',
    url: '/partners/',
  },
  {
    component: <Business />,
    title: 'Business Strategy & IP',
    url: '/business-strategy-and-ip/',
  },
  {
    component: <Papers />,
    title: 'Papers, Videos & More',
    url: '/papers-videos-and-more/',
  },
  {
    component: <Careers />,
    title: 'Careers, Team & Contact',
    url: '/careers-team-and-contact/',
  },
]


/**
 * List of Homepage/Mainpage Section/Page's in order, used to load on client.
 * @param {Object} [current] - Current node, to alternate section title display.
 * @returns {Array} - Array of React Component node objects.
 */
export function getMainSectionComponents(current) {
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
