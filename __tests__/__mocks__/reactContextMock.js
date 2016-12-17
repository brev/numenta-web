import config from './configMock'
import post from './postMock'

const context = {
  config,
  manifest: {
    repository: {
      type: 'git',
      url: 'https://github.com/numenta/numenta-web',
    },
    version: '0.0.1',
  },
  route: {
    page: post,
    pages: [post],
  },
  router: {
    createHref() {},
    go() {},
    goBack() {},
    goForward() {},
    isActive() {},
    push() {},
    replace() {},
    setRouteLeaveHook() {},
  },
}


/**
 * Jest test React Context mock.
 * @requires jest webpack
 */

export default context
