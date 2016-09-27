import config from './configMock'

const context = {
  config,
  route: {
    page: {
      data: {},
      file: {},
      path: '',
    },
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
