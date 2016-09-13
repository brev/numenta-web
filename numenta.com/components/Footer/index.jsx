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
