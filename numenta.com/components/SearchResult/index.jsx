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

const filterText = (text) => unescape(text).replace(/&#x27;/g, "'")


/**
 *
 */
const SearchResult = ({onClose, onOpen, query, results}) => {
  const isOpen = (query.length > 0)
  let items = (
    <ListItem>No search results found.</ListItem>
  )

  if (isOpen && results && (results.length > 0)) {
    items = results.map(({path, text, title}) => {
      const finds = text.match(new RegExp(`.{0,20}(${query}).{0,20}`, 'g'))
      let quoted = ''
      if (finds) {
        quoted = finds.join('...')
      }

      return (
        <ListItem key={path}>
          <TextLink
            onClick={onClose}
            to={path}
          >
            {filterText(title) || path}
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
