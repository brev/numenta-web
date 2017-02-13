// Numenta Web Platform and Sites source code
// MIT License (see LICENSE.txt)
// Copyright © 2005—2017 Numenta <http://numenta.com>

import IconClose from 'react-icons/lib/fa/close'
import Modal from 'react-modal'
import React from 'react'
import Image from '../Image'
import modalStyles from './_style-modal'
import styles from './index.css'


/**
 * Sound Player - React view component.
 */
class Sound extends React.Component {

  static propTypes = {
    image: React.PropTypes.string.isRequired,
    respond: React.PropTypes.oneOf(['mw', 'w']),
    time: React.PropTypes.string,
    title: React.PropTypes.string.isRequired,
    type: React.PropTypes.oneOf(['soundcloud']).isRequired,
    url: React.PropTypes.string.isRequired,
  }

  static defaultProps = {
    type: 'soundcloud',
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

  _createPlayer(url) {
    if (this.props.type === 'soundcloud') {
      return (
        <iframe
          id="soundcloud-widget"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          src={`https://w.soundcloud.com/player/?url=${url}&auto_play=true&visual=true`} // eslint-disable-line
        />
      )
    }
    return (
      <audio src={url} autoPlay="true" controls="true" />
    )
  }

  render() {
    const {image, respond, time, title, type, url} = this.props
    const {open} = this.state
    const titleLine = time ? `${title} (${time})` : title
    const alternate = `${title} ${type}`
    let player = null

    if (url && open) {
      player = this._createPlayer(url)
    }

    return (
      <div className={styles.sound}>
        <Image
          alt={alternate}
          border={true}
          onClick={() => this._playerOpen()}
          respond={respond}
          src={image}
        />
        <div className={styles.caption}>
          Sound: {titleLine}
        </div>
        <Modal
          contentLabel={`Sound: ${titleLine}`}
          isOpen={open}
          onRequestClose={() => this._playerClose()}
          style={modalStyles}
        >
          <div className={styles.close}>
            <IconClose
              color="inherit"
              onClick={() => this._playerClose()}
              title="Close"
            />
          </div>
          <div>
            {player}
          </div>
        </Modal>
      </div>
    )
  }
}

export default Sound
