import IconFaSearch from 'react-icons/lib/fa/search'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'
import request from 'superagent'
import SearchApi from 'js-worker-search'

import Button from '../Button'
import Form from '../Form'
import FormInput from '../FormInput'
import FormLabel from '../FormLabel'

import styles from './index.css'

const searchApi = new SearchApi()


/**
 *
 */
class Search extends React.Component {
  componentDidMount() {
    request
      .get(prefixLink('/search-index.json'))
      .end((error, response) => {
        console.log(searchApi)
        console.log(error, response)
      })
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Form>
        <span className={styles.label}>
          <FormLabel htmlFor="q">Search</FormLabel>
        </span>
        <span className={styles.query}>
          <FormInput
            name="q"
            placeholder="Search..."
            type="search"
          />
        </span>
        <Button theme="light" type="submit">
          <IconFaSearch color="inherit" />
        </Button>
      </Form>
    )
  }
}

export default Search
