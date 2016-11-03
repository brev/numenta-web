// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import moment from 'moment'
import React from 'react'

import {getRepo} from '../../utils/shared'

import LogoMark from '../LogoMark'
import Spacer from '../Spacer'
import TextLink from '../TextLink'

import styles from './index.css'


const Footer = (props, {config}) => {
  const {links} = config
  const repo = getRepo()
  const year = moment().year()

  return (
    <div className={styles.footbar}>
      <footer className={styles.footer}>
        <span>
          © {year} {' '}
          <TextLink to={links.in.home}>Numenta</TextLink>
        </span>
        <span className={styles.mark}>
          <LogoMark />
        </span>
        <span>
          <TextLink to={links.in.terms}>Terms</TextLink>
          <Spacer />
          <TextLink to={links.in.privacy}>Privacy</TextLink>
          <Spacer />
          <TextLink to={links.in.sitemap}>Sitemap</TextLink>
          <Spacer />
          <TextLink to={repo}>Source</TextLink>
        </span>
      </footer>
    </div>
  )
}

Footer.contextTypes = {
  config: React.PropTypes.object,
}

export default Footer
