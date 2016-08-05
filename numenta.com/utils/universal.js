import {config} from 'config'  // eslint-disable-line import/no-unresolved
import moment from 'moment'

import {repository, version} from '../package'


/**
 *
 */
export function capitalize(text) {
  const first = text.charAt(0).toUpperCase()
  const rest = text.slice(1)
  return `${first}${rest}`
}

/**
 *
 */
export function getConfig() {
  return config
}

/**
 *
 */
export function getModalAspect(width) {
  const pad = 20
  let long

  if (width >= (1280 - pad)) long = 1024
  else if (width >= (1024 - pad)) long = 720
  else if (width >= (720 - pad)) long = 640
  else long = (480 - pad)

  return long
}

/**
 *
 */
export function getRepo() {
  return repository.url
}

/**
 *
 */
export function getVersion() {
  return version
}

/**
 *
 */
export function sortDateAscend(a, b) {
  const aDate = moment(a.data.date, config.moments.post)
  const bDate = moment(b.data.date, config.moments.post)

  if (aDate > bDate) return 1
  if (aDate < bDate) return -1
  return 0
}

/**
 *
 */
export function sortDateDescend(a, b) {
  const aDate = moment(a.data.date, config.moments.post)
  const bDate = moment(b.data.date, config.moments.post)

  if (aDate > bDate) return -1
  if (aDate < bDate) return 1
  return 0
}

/**
 *
 */
export function stamp(text) {
  return `${text}?v=${getVersion()}`
}

/**
 * Template String to trim extra spaces from multiline es6 strings.
 * @param {Array} strings - Input string literals for es6 template string.
 * @param {...Array} [values] - Template string filler values.
 * @returns {String} - Completed and filled string.
 */
export function trims(strings, ...values) {
  let result = ''
  let i = 0
  let tmp

  while (i < strings.length) {
    tmp = strings[i]
    tmp = tmp.replace(/\n/g, ' ')
    tmp = tmp.replace(/\s+/g, ' ')
    result += tmp

    if (i < values.length) result += values[i]
    i++
  }

  return result
}
