import {unescape} from 'lodash'
import Highlight from 'react-highlighter'
import Modal from 'react-modal'
import React from 'react'

import {getBrowserWidth} from '../../utils/client'
import {getModalAspect} from '../../utils/shared'

import ListItem from '../ListItem'
import ListOrder from '../ListOrder'
import Paragraph from '../Paragraph'
import Strong from '../Strong'
import SubTitle from '../SubTitle'
import Subtle from '../Subtle'
import TextLink from '../TextLink'

import styles from './index.css'
import modalStyles from './style-modal'

const filterText = (text) => unescape(text)
  .replace(/&#x27;/g, "'")
  .replace(/[^\x00-\x7F]/g, ' ')

const sortCountDesc = (a, b) => {
  if (a.count < b.count) return 1
  if (a.count > b.count) return -1
  return 0
}


/**
 *
 */
const SearchResult = ({onClose, onOpen, query, results}) => {
  const radius = 30
  const isOpen = (query.length > 0)
  let items = (
    <ListItem>No search results found.</ListItem>
  )

  if (isOpen && results && (results.length > 0)) {
    items = results
      .map(({path, text, title}) => {  // eslint-disable-line array-callback-return, consistent-return, max-len
        // get results, and count to sort
        const matcher = new RegExp(
          `.{0,${radius}}?(${query}).{0,${radius}}`,
          'g'
        )
        const matches = text.match(matcher) || []
        return {count: matches.length, matches, path, title}
      })
      .filter(({count}) => (count >= 1))  // drop empties
      .sort(sortCountDesc)  // sort on count
      .map(({matches, path, title}) => {  // generate ordered elements w/results
        let quoted = ''
        if (matches) {
          quoted = matches.slice(0, 5).join('...')  // 5 blurbs max per result
        }

        return (
          <ListItem key={path}>
            <TextLink
              onClick={onClose}
              to={path}
            >
              <Highlight search={query}>
                {filterText(title)}
              </Highlight>
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
              “...
              <Highlight search={query}>
                {filterText(quoted)}
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
      onAfterOpen={onOpen}
      onRequestClose={onClose}
      style={modalStyles}
    >
      <div className={styles.result}>
        <SubTitle>
          Search Results for <Strong>{query}:</Strong>
        </SubTitle>
        <ListOrder>
          {items}
        </ListOrder>
      </div>
    </Modal>
  )
}

SearchResult.propTypes = {
  onClose: React.PropTypes.func,
  onOpen: React.PropTypes.func,
  query: React.PropTypes.string,
  results: React.PropTypes.array,
}

export default SearchResult
