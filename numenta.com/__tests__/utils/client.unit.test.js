import {getBrowserWidth} from '../../utils/client'


describe('Client helper utils', () => {

  describe('getBrowserWidth()', () => {
    it('Gets browser width', () => {
      expect(getBrowserWidth()).toBe(640)
    })
  })

})
