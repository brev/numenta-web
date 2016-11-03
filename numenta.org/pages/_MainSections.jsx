// Numenta.org HTM Community website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import {findIndex} from 'lodash'
import React from 'react'

import Section from '../components/Section'

import SectionCommunity from './community/_Section'
import SectionHome from './_Section'
import SectionImplement from './implementations/_Section'
import SectionResearch from './research-and-publications/_Section'
import SectionSchool from './htm-school/_Section'

const mainSectionList = [
  {
    component: <SectionHome key="sectionHome" />,
    title: 'Numenta HTM Community',
    url: '/',
  },
  {
    component: <SectionResearch key="sectionResearch" />,
    title: 'Research & Publications',
    url: '/research-and-publications/',
  },
  {
    component: <SectionCommunity key="sectionCommunity" />,
    title: 'Community',
    url: '/community/',
  },
  {
    component: <SectionImplement key="sectionImplement" />,
    title: 'Implementations',
    url: '/implementations/',
  },
  {
    component: <SectionSchool key="sectionSchool" />,
    title: 'HTM School',
    url: '/htm-school/',
  },
]


/**
 * Gets the next MainSection object based on the one given
 * @param {Object} current - Current Section object trying to get next of
 * @public
 * @returns {Object|null} - Next Section object or null
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
 * Main Sections of site (Single-page app Homepage for advanced clients,
 *  individual pages for older clients), React view component.
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
