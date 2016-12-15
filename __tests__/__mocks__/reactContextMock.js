import config from './configMock'


const page = {
  data: {
    date: '2016-12-21',
    title: 'Title',
  },
  file: {
    path: '/papers/test.md',
  },
  path: '/papers/test.md',
}

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
    page,
    pages: [page],
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
