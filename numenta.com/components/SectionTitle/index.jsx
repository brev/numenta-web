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

import classNames from 'classnames'
import IconAngleDown from 'react-icons/lib/fa/angle-down'
import IconAngleUp from 'react-icons/lib/fa/angle-up'
import React from 'react'

import Title from '../Title'

import styles from './index.css'


const SectionTitle = ({children, clickHandle, headline, open, title}) => {
  const isHeadline = headline === true
  const isOpen = open === true && !isHeadline
  const IconAngle = isOpen ? IconAngleUp : IconAngleDown
  const titleClasses = [styles.title]
  let sectionTitle = (<Title headline={headline}>{children}</Title>)

  if (!isHeadline) {
    if (isOpen) titleClasses.push(styles.open)

    sectionTitle = (
      <nav
        className={classNames(...titleClasses)}
        onClick={clickHandle}
        title={title}
      >
        <IconAngle className={styles.toggle} />
        {sectionTitle}
      </nav>
    )
  }

  return sectionTitle
}

SectionTitle.propTypes = {
  children: React.PropTypes.node.isRequired,
  clickHandle: React.PropTypes.func.isRequired,
  headline: React.PropTypes.bool.isRequired,
  title: React.PropTypes.string,
}

SectionTitle.defaultProps = {
  headline: false,
}

export default SectionTitle
