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

import {config} from 'config'  // eslint-disable-line import/no-unresolved
import moment from 'moment'

import {repository, version} from '../package'

/**
 * Utils Shared between Client and Server (Isomorphic, Universal, etc.)
 */


/**
 *
 */
export function getConfig() {
  return config
}

/**
 *
 */
export function getEventTimeDisplay(when) {
  const formatDate = config.moments.human
  const formatTime = 'h:mm A'
  const formatBegin = [formatDate]
  const formatEnd = [formatDate]
  const out = []
  let begin = null
  let end = null

  if (!when || !('begin' in when)) {
    return null
  }

  // discovery
  if (when.begin.match(' ')) {
    formatBegin.push(formatTime)
  }
  begin = moment(new Date(when.begin))

  if ('end' in when) {
    if (when.end.match(' ')) {
      formatEnd.push(formatTime)
    }
    end = moment(new Date(when.end))
  }

  // format output string
  out.push(begin.format(formatBegin.join(' ')))
  if (when.begin !== when.end) {
    if (begin.format(formatDate) === end.format(formatDate)) {
      formatEnd.shift()  // don't repeat Date twice
    }
    out.push('—')
    out.push(end.format(formatEnd.join(' ')))
  }

  return out.join(' ')
}

/**
 *
 */
export function getModalWidth(width, options) {
  const copy = (options && 'copy' in options) ? options.copy : false
  const pad = (options && 'pad' in options) ? options.pad : 120
  let long

  if (width > 1280) long = 1280
  else if (width > 1024) long = 1024
  else if (width > 720) long = 720
  else if (width > 640) long = 640
  else long = 480

  long -= pad

  if (copy && (long > 640)) long = 640

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
 * Parse Video ID from URL, currently YouTube format http://youtu.be/VIDEO_ID
 * @param {String} url - Video URL to get Video ID from, as http://youtu.be/ID
 * @returns {String} - Video ID as parsed from URL
 */
export function getVideoIdFromUrl(url) {
  return url.match(/.*\/(.*)$/).pop()
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
export function sortOrderAscend(a, b) {
  if (a.data.sort > b.data.sort) return 1
  if (a.data.sort < b.data.sort) return -1
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
    i += 1
  }

  return result
}
