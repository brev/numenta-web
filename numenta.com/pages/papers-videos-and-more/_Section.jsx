import IconBook from 'react-icons/lib/fa/book'
import IconPaper from 'react-icons/lib/fa/file-pdf-o'
import IconVideo from 'react-icons/lib/fa/youtube-play'
import React from 'react'

import {capitalize, sortDateDescend} from '../../utils/universal'

import Anchor from '../../components/Anchor'
import List from '../../components/List'
import ListItem from '../../components/ListItem'
import Paragraph from '../../components/Paragraph'
import Spacer from '../../components/Spacer'
import SubTitle from '../../components/SubTitle'
import Subtle from '../../components/Subtle'
import TextLink from '../../components/TextLink'
import Video from '../../components/Video'

import ImageVideo from './images/video.png'
import styles from './index.css'

const learnIcons = {
  book: (<IconBook />),
  paper: (<IconPaper />),
  video: (<IconVideo />),
}


/**
 *
 */
const SectionPapers = (props, {config, route}) => {
  const {links} = config
  const {pages} = route
  const postsLearn = pages.filter(({file}) => (
    (file.path.match(/^papers\-videos.*\/learn\/.*\.md/))
  ))
  const postsPapers = pages.filter(({file}) => (
    (file.path.match(/^papers\-videos.*\/papers\/.*\.md/))
  ))
  const learns = postsLearn.sort(sortDateDescend).map(({data, file, path}) => (
    <ListItem key={file.stem}>
      <div className={styles.columns}>
        <div className={styles.icon}>
          {learnIcons[data.media]}
        </div>
        <div className={styles.learn}>
          <TextLink to={path}>
            {data.title}
          </TextLink>
          <div>
            <Subtle>
              {data.author}
              <Spacer />
              {data.org}
              <Spacer />
              {data.date}
            </Subtle>
          </div>
        </div>
      </div>
    </ListItem>
  ))
  const papers = postsPapers.sort(sortDateDescend).map(({data, file}) => {
    const categoryNice = capitalize(data.category.replace(/-/, ' '))
    return (
      <ListItem key={file.stem}>
        <TextLink to={data.link}>
          {data.title}
        </TextLink>
        <Paragraph>
          {data.brief}
        </Paragraph>
        <Subtle>
          {data.author}
          <div>
            {categoryNice}
            <Spacer />
            {data.org}
            <Spacer />
            {data.date}
          </div>
        </Subtle>
      </ListItem>
    )
  })

  return (
    <div className={styles.columns}>
      <div className={styles.content}>

        <Paragraph lead={true}>
          To help you learn about our theory and technology, we have organized
          educational content below. It is designed for anyone who wants to
          learn about HTM cortical theory and its applications for machine
          intelligence.
        </Paragraph>
        <List marker="disc">
          <ListItem>
            <TextLink to={links.in.bami}>
              Biological and Machine Intelligence (BaMI)
            </TextLink>
            <Spacer />
            This living book (Biological And Machine Intelligence) documents our
            Hierarchical Temporal Memory framework for both biological and
            machine intelligence.
          </ListItem>
          <ListItem>
            {/* eslint-disable max-len */}
            <TextLink to="https://www.youtube.com/playlist?list=PL3yXMgtrZmDqhsFQzwUC9V8MeeVOQ7eZ9">
              HTM School
            </TextLink>
            {/* eslint-enable max-len */}
            <Spacer />
            This YouTube series is designed to educate the general public about
            Hierarchical Temporal Memory (HTM). Each 10-15 minute episode dives
            into a particular topic of HTM theory.
          </ListItem>
          <ListItem>
            <TextLink to={links.out.org}>
              NuPIC
            </TextLink>
            <Spacer />
            This is the Numenta Platform for Intelligent Computing. For those
            interested in a more technical perspective, go to this site for
            information about our open source communities, including online
            forums and installation instructions.
          </ListItem>
        </List>

        <Anchor name="papers" />
        <SubTitle>
          Research Papers
        </SubTitle>
        <Paragraph>
          Here you’ll find a collection of recent Numenta Research papers. Some
          of them are currently under review at journals/conferences but we have
          made all manuscripts available on {' '}
          <TextLink to="http://arxiv.org">arXiv,</TextLink> {' '}
          an online repository of self-archived scientific papers.
        </Paragraph>
        <List marker="disc">
          {papers}
        </List>

      </div>
      <div className={styles.aside}>

        <div className={styles.video}>
          <Video
            image={ImageVideo}
            respond="mw"
            time="1:00:00"
            title="The Hard Unsolved Problems in HTM Theory"
            type="youtube"
            videoId="gXP-63sZM_o"
          />
        </div>

        <Anchor name="learn" />
        <SubTitle>
          Learn
        </SubTitle>
        <List>
          {learns}
        </List>

      </div>
    </div>
  )
}

SectionPapers.contextTypes = {
  config: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default SectionPapers
