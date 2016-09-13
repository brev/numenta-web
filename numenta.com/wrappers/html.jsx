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


const HtmlWrapper = ({route}) => {
  const post = route.page.data

  return (
    <div className="html">
      <h1 dangerouslySetInnerHTML={{__html: post.title}} />
      <div dangerouslySetInnerHTML={{__html: post.body}} />
    </div>
  )
}

HtmlWrapper.propTypes = {
  route: React.PropTypes.object.isRequired,
}

export default HtmlWrapper
