// Numenta.com company website source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import Helmet from 'react-helmet'
import React from 'react'

import Anchor from '../../../components/Anchor'
import Image from '../../../components/Image'
import List from '../../../components/List'
import ListItem from '../../../components/ListItem'
import Paragraph from '../../../components/Paragraph'
import Section from '../../../components/Section'
import SubTitle from '../../../components/SubTitle'
import TextLink from '../../../components/TextLink'

import ImageDetail from './images/detail.png'
import styles from './index.css'

const title = 'Hierarchical Temporal Memory (HTM)'


/**
 * Hierarchical Temporal Memory (HTM) page - React view component.
 */
const HtmPage = (props, {config}) => {
  const {links} = config

  return (
    <article>
      <Helmet title={title} />
      <Section headline={true} open={true} title={title}>

        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Detail"
              border={true}
              respond="mw"
              src={ImageDetail}
            />
          </div>
          <div className={styles.content}>
            <Paragraph lead={true}>
              HTM is a biologically-constrained theory of intelligence based on
              years of research in theoretical neuroscience.
            </Paragraph>
          </div>
        </div>

        <Anchor name="overview" />
        <SubTitle>Overview</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Detail"
              border={true}
              respond="mw"
              src={ImageDetail}
            />
          </div>
          <div className={styles.content}>
            <Paragraph>
              For an excellent technical overview of HTM theory, read the {' '}
              <TextLink to={links.in.bami}>
                HTM Overview
              </TextLink> {' '}
              chapter of our online text, {' '}
              <TextLink to={links.in.bami}>
                Biological and Machine Intelligence.
              </TextLink>
            </Paragraph>
          </div>
        </div>

        <Anchor name="history" />
        <SubTitle>History</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Detail"
              border={true}
              respond="mw"
              src={ImageDetail}
            />
          </div>
          <div className={styles.content}>
            <List>
              <ListItem>
                Creation of RNI
              </ListItem>
              <ListItem>
                Founding of Numenta
              </ListItem>
              <ListItem>
                Generations of our Algorithms
              </ListItem>
            </List>
          </div>
        </div>

        <Anchor name="htm-today" />
        <SubTitle>HTM Today</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Detail"
              border={true}
              respond="mw"
              src={ImageDetail}
            />
          </div>
          <div className={styles.content}>
            <List>
              <ListItem>
                Code implementations (link to homepage section)
              </ListItem>
              <ListItem>
                What HTM Theory covers
              </ListItem>
            </List>
          </div>
        </div>

        <Anchor name="future-of-htm" />
        <SubTitle>Future of HTM</SubTitle>
        <div className={styles.columns}>
          <div className={styles.aside}>
            <Image
              alt="Detail"
              border={true}
              respond="mw"
              src={ImageDetail}
            />
          </div>
          <div className={styles.content}>
            <List>
              <ListItem>
                What we are/will be working on
              </ListItem>
            </List>
          </div>
        </div>

      </Section>
    </article>
  )
}

HtmPage.contextTypes = {
  config: React.PropTypes.object,
}

export default HtmPage
