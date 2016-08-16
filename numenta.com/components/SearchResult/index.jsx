import {capitalize} from 'lodash'
import Highlight from 'react-highlighter'
import Modal from 'react-modal'
import React from 'react'

import {getBrowserWidth} from '../../utils/client'
import {getModalAspect} from '../../utils/shared'

import List from '../List'
import ListItem from '../ListItem'
import Paragraph from '../Paragraph'
import Strong from '../Strong'
import SubTitle from '../SubTitle'
import Subtle from '../Subtle'
import TextLink from '../TextLink'

import styles from './index.css'
import modalStyles from './style-modal'


/**
 *
 */
const SearchResult = ({onClose, query, results}) => {
  const quoteRadius = 12
  const isOpen = (query.length > 0)
  let items = (
    <ListItem>No search results found.</ListItem>
  )

  if (isOpen && results && (results.length > 0)) {
    items = results.map(({path, text, title}) => {
      const words = text.split(/ +/)
      const entries = Array.from(words.entries())
      const finds = entries.filter(([, value]) => (
        (value.includes(query) || (value.length > 2 && query.includes(value)))
      ))
      const quotes = finds.map(([index]) => (
        words.slice(index - quoteRadius, index + quoteRadius).join(' ')
      ))

      return (
        <ListItem key={path}>
          <TextLink
            onClick={onClose}
            to={path}
          >
            {title || path}
          </TextLink>
          <br />
          <TextLink
            onClick={onClose}
            to={path}
          >
            <Subtle>
              {path}
            </Subtle>
          </TextLink>
          <Paragraph>
            “
            <Highlight search={query}>
              {capitalize(quotes.join(' ... '))}
            </Highlight>
            ...”
          </Paragraph>
        </ListItem>
      )
    })
  }

  modalStyles.content.width = getModalAspect(getBrowserWidth() - 100)

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <div className={styles.result}>
        <SubTitle>
          Search Results for <Strong>{query}:</Strong>
        </SubTitle>
        <List>
          {items}
        </List>
      </div>
    </Modal>
  )
}

SearchResult.propTypes = {
  onClose: React.PropTypes.func,
  query: React.PropTypes.string,
  results: React.PropTypes.array,
}

export default SearchResult
