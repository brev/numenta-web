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
    push() {},
    replace() {},
  },
}


/**
 * Jest test React Context mock.
 * @requires jest webpack
 */

export default context
