import IconFaSearch from 'react-icons/lib/fa/search'
import Modal from 'react-modal'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import request from 'superagent'
import SearchApi from 'js-search'

import {getBrowserWidth} from '../../utils/client'
import {getModalAspect} from '../../utils/shared'

import Button from '../Button'
import Form from '../Form'
import FormInput from '../FormInput'
import FormLabel from '../FormLabel'
import List from '../List'
import ListItem from '../ListItem'
import Paragraph from '../Paragraph'
import Strong from '../Strong'
import SubTitle from '../SubTitle'
import TextLink from '../TextLink'

import styles from './index.css'
import modalStyles from './style-modal'


/**
 *
 */
class Search extends React.Component {
  constructor(props) {
    super(props)

    this._api = new SearchApi.Search('path')
    this._api.addIndex('text')

    this.state = {query: ''}
  }

  componentDidMount() {
    request
      .get(prefixLink('/_searchIndex.json'))
      .end((error, {body}) => {
        if (error) throw new Error(error)
        return this._api.addDocuments(body)
      })
  }

  componentWillUnmount() {
    this._api = null
  }

  _perform(event) {
    this.setState({
      query: event.target.value,
    })
  }

  render() {
    const {query} = this.state
    let resultsModal

    if (query) {
      const empty = {target: {value: ''}}
      const matches = this._api.search(query).slice(0, 10)
      const results = matches.map(({path, text}) => (
        <ListItem key={path}>
          <TextLink
            onClick={() => this._perform(empty)}
            to={path}
          >
            <Strong>
              {path}
            </Strong>
          </TextLink>
          <Paragraph>
            {text}
          </Paragraph>
        </ListItem>
      ))
      modalStyles.content.width = getModalAspect(getBrowserWidth() - 100)
      resultsModal = (
        <Modal
          isOpen={true}
          onRequestClose={() => this._perform(empty)}
          style={modalStyles}
        >
          <SubTitle>
            Search Results
          </SubTitle>
          <List>
            {results}
          </List>
        </Modal>
      )
    }

    return (
      <Form>
        <span className={styles.label}>
          <FormLabel htmlFor="q">Search</FormLabel>
        </span>
        <span className={styles.query}>
          <FormInput
            name="q"
            onChange={(event) => this._perform(event)}
            placeholder="Search..."
            type="search"
            value={query}
          />
        </span>
        <Button theme="light" type="submit">
          <IconFaSearch color="inherit" />
        </Button>
        {resultsModal}
      </Form>
    )
  }
}

export default Search
