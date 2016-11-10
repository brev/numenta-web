// Numenta shared web components
// MIT License (see LICENSE.txt)
// Copyright © 2005—2016 Numenta <http://numenta.com>

import React from 'react'

import styles from './index.css'


const Anchor = ({name}) => (
  <span className={styles.anchor} id={name} />
)

Anchor.propTypes = {
  name: React.PropTypes.string.isRequired,
}

export default Anchor
