import IconFacebook from 'react-icons/lib/fa/facebook'
import IconLinkedIn from 'react-icons/lib/fa/linkedin'
import IconTwitter from 'react-icons/lib/fa/twitter'
import IconYouTube from 'react-icons/lib/fa/youtube'
import React from 'react'

import ImageLink from '../ImageLink'

import styles from './style.css'


const SocialMedia = (state, {config}) => {
  const {links} = config
  const sites = {
    [links.out.facebook]: IconFacebook,
    [links.out.twitter]: IconTwitter,
    [links.out.youtube]: IconYouTube,
    [links.out.linkedin]: IconLinkedIn,
  }
  const socials = []

  for (let site in sites) {
    if (sites.hasOwnProperty(site)) {
      const Component = sites[site]
      const title = Component.name.replace(/^Fa/, '')
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
