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

import IconFacebook from 'react-icons/lib/fa/facebook'
import IconLinkedIn from 'react-icons/lib/fa/linkedin'
import IconTwitter from 'react-icons/lib/fa/twitter'
import IconYouTube from 'react-icons/lib/fa/youtube'
import React from 'react'

import ImageLink from '../ImageLink'

import styles from './index.css'


const SocialMedia = (props, {config}) => {
  const {links} = config
  const sites = {
    [links.out.facebook]: IconFacebook,
    [links.out.twitter]: IconTwitter,
    [links.out.youtube]: IconYouTube,
    [links.out.linkedin]: IconLinkedIn,
  }
  const socials = []

  for (const site in sites) {
    if ({}.hasOwnProperty.call(sites, site)) {
      const Component = sites[site]
      const title = site.match(/(\w+)\.com/)[1]
      socials.push(
        <span className={styles.spread} key={title}>
          <ImageLink title={title} to={site}>
            <Component color="inherit" />
          </ImageLink>
        </span>
      )
    }
  }

  return (
    <div className={styles.social}>
      {socials}
    </div>
  )
}

SocialMedia.contextTypes = {
  config: React.PropTypes.object,
}

export default SocialMedia
