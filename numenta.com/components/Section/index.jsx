import classNames from 'classnames'
import IconAngleUp from 'react-icons/lib/fa/angle-up'
import {prefixLink} from 'gatsby-helpers'  // eslint-disable-line import/no-unresolved, max-len
import React from 'react'

import SectionTitle from '../SectionTitle'

import styles from './index.css'


class Section extends React.Component {

  static contextTypes = {
    config: React.PropTypes.object,
    router: React.PropTypes.object,
  }

  static defaultProps = {
    headline: false,
    open: false,
  }

  static propTypes = {
    children: React.PropTypes.any.isRequired,
    headline: React.PropTypes.bool.isRequired,
    id: React.PropTypes.string,
    open: React.PropTypes.bool.isRequired,
    title: React.PropTypes.string.isRequired,
    url: React.PropTypes.string,
  }

  constructor(props) {
    super(props)

    this.state = {
      open: props.open || false,
    }
  }

  _toggle() {
    const {url} = this.props
    const open = !this.state.open
    // const {router} = this.context

    // Handle dynamic url changes as sections are opened/closed.
    if (open) {
      global.window.history.pushState({}, '', prefixLink(url))
      // router.push(url)
    }
    else {
      // @TODO set URL based on what's visible, and/or
      //    localStorage section open flag
      // global.window.history.back()
      // router.goBack()
    }

    this.setState({open})
  }

  render() {
    const {children, headline, id, title} = this.props
    const {open} = this.state
    const isHeadline = headline === true
    const isOpen = open === true
    const articleClasses = [styles.article, styles.closed]
    let close

    if (isOpen) articleClasses.pop()

    if (!isHeadline) {
      close = (
        <div
          className={styles.closeButton}
          onClick={::this._toggle}
        >
          <IconAngleUp className={styles.closeIcon} color="inherit" />
          Close Section
        </div>
      )
    }

    return (
      <section id={id} className={styles.section}>
        <SectionTitle
          clickHandle={::this._toggle}
          headline={headline}
          open={open}
        >
          {title}
        </SectionTitle>
        <article className={classNames(...articleClasses)}>
          {children}
          {close}
        </article>
      </section>
    )
  }

}

export default Section
