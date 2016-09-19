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

import IconFaSearch from 'react-icons/lib/fa/search'
import {inHTMLData} from 'xss-filters'
import lunr from 'lunr'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import request from 'superagent'

import {stamp} from '../utils/shared'

import Button from '../Button'
import Form from '../Form'
import FormInput from '../FormInput'
import FormLabel from '../FormLabel'
import SearchResult from '../SearchResult'

import styles from './index.css'


/**
 * Search Query Component
 * @requires js-search
 * @see https://github.com/bvaughn/js-search
 */
class Search extends React.Component {
  constructor(props) {
    super(props)

    // init client-side search indexing
    this._documents = {}
    this._index = lunr(function () {
      this.ref('path')
      this.field('title', {boost: 10})
      this.field('text')
      this.pipeline.remove(lunr.stopWordFilter)
    })

    this.state = {query: ''}
  }

  componentDidMount() {
    request
      .get(prefixLink(stamp('/_searchIndex.json')))  // load index
      .set('Accept', 'application/json')
      .end((error, {body}) => {
        if (error) throw new Error(error)
        body.forEach((doc) => {
          const {path, text, title} = doc
          this._documents[path] = {text, title}  // save
          this._index.add(doc)  // index
        })
      })
  }

  componentWillUnmount() {
    this._documents = {}
    this._index = null
  }

  _performSearch(query) {
    this.setState({
      query: inHTMLData(query),
    })
  }

  render() {
    const {query} = this.state
    let matches, results

    if (query) {
      matches = this._index
        .search(query)
        .slice(0, 30)
        .map(({ref}) => {
          const {title, text} = this._documents[ref]
          return {path: ref, title, text}
        })
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
      <div className={styles.search}>
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
      </div>
    )
  }
}

export default Search
