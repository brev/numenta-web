import IconFaSearch from 'react-icons/lib/fa/search'
import {inHTMLData} from 'xss-filters'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import request from 'superagent'
import SearchApi from 'js-search'

import Button from '../Button'
import Form from '../Form'
import FormInput from '../FormInput'
import FormLabel from '../FormLabel'
import SearchResult from '../SearchResult'

import styles from './index.css'


/**
 *
 */
class Search extends React.Component {
  constructor(props) {
    super(props)

    this._api = new SearchApi.Search('path')
    this._api.addIndex('text')
    this._api.addIndex('title')

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

  _performSearch(query) {
    // ??? would event.preventDefault here help the inital box focus problem???
    this.setState({
      query: inHTMLData(query.toLowerCase()),
    })
  }

  render() {
    const {query} = this.state
    let matches, results

    if (query) {
      matches = this._api.search(query).slice(0, 10)
      results = (
        <SearchResult
          onClose={() => this._performSearch('')}
          onOpen={() => global.document.getElementById('q').focus()}
          query={query}
          results={matches}
        />
      )
    }

    return (
      <Form onSubmit={(event) => event.preventDefault()}>
        <span className={styles.label}>
          <FormLabel htmlFor="q">Search</FormLabel>
        </span>
        <span className={styles.query}>
          <FormInput
            name="q"
            onChange={(event) => this._performSearch(event.target.value)}
            placeholder="Search..."
            type="search"
            value={query}
          />
        </span>
        <Button
          onClick={(event) => event.preventDefault()}
          theme="light"
          type="submit"
        >
          <IconFaSearch color="inherit" />
        </Button>
        {results}
      </Form>
    )
  }
}

export default Search
