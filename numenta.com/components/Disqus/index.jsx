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

import React from 'react'


/**
 * Disqus Comments Thread React Component.
 *  Custom, as `react-disqus-thread` is not working.
 * @see github:mzabriskie/react-disqus-thread/issues/14#issuecomment-234407160
 */
class Disqus extends React.Component {

  constructor(props) {
    super(props)
    this.state = props
  }

  componentWillMount() {
    const {window} = global
    const {document} = window

    if (typeof window !== 'undefined' && document) {
      const component = this
      window.disqus_config = function () {
        this.page.category_id = component.state.category_id
        this.page.identifier = component.state.identifier
        this.page.title = component.state.title
        this.page.url = component.state.url
        this.callbacks.onNewComment = component.state.onNewComment
      }
      const script = document.createElement('script')
      script.src = `//${this.state.shortname}.disqus.com/embed.js`
      script.async = true
      document.body.appendChild(script)
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(nextProps)
  }

  render() {
    return (
      <div id="disqus_thread" />
    )
  }

}

Disqus.propTypes = {
  category_id: React.PropTypes.string,
  identifier: React.PropTypes.string,
  onNewComment: React.PropTypes.func,
  shortname: React.PropTypes.string.isRequired,
  title: React.PropTypes.string,
  url: React.PropTypes.string,
}

export default Disqus
