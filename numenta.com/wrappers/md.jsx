import Helmet from 'react-helmet'
import moment from 'moment'
import React from 'react'

import Avatar from '../components/Avatar'
import Image from '../components/Image'
import Section from '../components/Section'
import Spacer from '../components/Spacer'
import Subtle from '../components/Subtle'
import TextLink from '../components/TextLink'
import Time from '../components/Time'

import styles from './md.css'


/**
 *
 */
const MarkdownWrapper = ({route}, {config}) => {
  const {data, file, path} = route.page
  const datetime = moment(data.date, config.moments.post)
  const when = datetime.format(config.moments.human)
  const type = file.dir.split('/')[0]
  const author = (
    <div className={styles.author}>
      <Subtle>
        <Avatar name={data.author} />
        {data.author}
        <Spacer />
        {data.org}
      </Subtle>
    </div>
  )

  return (
    <div className={styles.markdown}>
      <Helmet title={data.title} />
      <div className={styles.date}>
        <Time moment={datetime}>{when}</Time>
        <Spacer />
        <TextLink to={`/${type}/`}>
          {type}
        </TextLink>
      </div>
      <Section
        headline={true}
        open={true}
        title={data.title}
      >
        {author}
        <Image
          alt={data.title}
          border={true}
          respond="mw"
          shadow={true}
          src={`${path}${data.image}`}
        />
        <div
          dangerouslySetInnerHTML={{__html: data.body}}
          className={styles.content}
        />
        {author}
        <div className={styles.back}>
          <TextLink to={`/${type}/`}>
            ◄ Back to {type}
          </TextLink>
        </div>
      </Section>
    </div>
  )
}

MarkdownWrapper.contextTypes = {
  config: React.PropTypes.object,
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
