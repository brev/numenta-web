import {getVersion} from '../shared'


describe('Shared Client+Server helper utils', () => {

  describe('getVersion()', () => {
    it('Gets 0.2.x version number', () => {
      expect(getVersion()).toContain('0.2.')
    })
  })

})
