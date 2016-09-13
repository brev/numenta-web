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

import Modal from 'react-modal'
import React from 'react'
import YouTube from 'react-youtube'

import {getBrowserWidth} from '../../utils/client'
import {getModalWidth} from '../../utils/shared'
import Image from '../Image'

import styles from './index.css'
import modalStyles from './_style-modal'


class Video extends React.Component {

  static propTypes = {
    image: React.PropTypes.string.isRequired,
    respond: React.PropTypes.oneOf(['mw', 'w']),
    time: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['youtube']).isRequired,
    videoId: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    type: 'youtube',
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false,
    }
  }

  _playerClose() {
    this.setState({open: false})
  }

  _playerOpen() {
    this.setState({open: true})
  }

  render() {
    const {image, respond, time, title, type, videoId} = this.props
    const {open} = this.state
    const isOpen = open === true
    const modalWidth = getModalWidth(getBrowserWidth())
    const playerOptions = {
      width: modalWidth.toString(),
      height: (modalWidth * (360 / 640)).toString(),  // ~640x360
      playerVars: {autoplay: 1},
    }
    const titleLine = time ? `${title} (${time})` : title
    const alternate = `${title} ${type} video screenshot`
    let player

    if (isOpen && videoId && type === 'youtube') {
      player = (<YouTube opts={playerOptions} videoId={videoId} />)
    }

    return (
      <div className={styles.video}>
        <Image
          alt={alternate}
          border={true}
          onClick={() => this._playerOpen()}
          respond={respond}
          src={image}
        />
        <div className={styles.caption}>
          Video: {titleLine}
        </div>
        <Modal
          isOpen={open}
          onRequestClose={() => this._playerClose()}
          style={modalStyles}
        >
          {player}
        </Modal>
      </div>
    )
  }

}

export default Video
