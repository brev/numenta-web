import IconFaSearch from 'react-icons/lib/fa/search'
import React from 'react'

import Button from '../Button'
import Form from '../Form'
import FormInput from '../FormInput'
import FormLabel from '../FormLabel'

import styles from './style.css'


const Search = () => (
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

export default Search
