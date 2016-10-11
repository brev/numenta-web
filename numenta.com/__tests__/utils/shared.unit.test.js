import {
  getModalWidth, getRepo, getVersion, getVideoIdFromUrl, stamp, trims,
} from '../../utils/shared'


describe('Shared Client+Server helper utils', () => {

  describe('getConfig()', () => {
    it('Gets configuration', () => {
      // expect(getConfig()).toBeObject()
    })
  })

  describe('getEventTimeDisplay()', () => {
    it('Gets event datetime display', () => {
      // expect(getEventTimeDisplay(when)).toContain()
    })
  })

  describe('getModalWidth()', () => {
    it('Gets default width of modal', () => {
      expect(getModalWidth()).toBe(360)
    })
  })

  describe('getRepo()', () => {
    it('Gets repository', () => {
      const repo = getRepo()
      expect(repo).toContain('github')
      expect(repo).toContain('numenta-web')
    })
  })

  describe('getVersion()', () => {
    it('Gets 0.2.x version number', () => {
      expect(getVersion()).toContain('0.2.')
    })
  })

  describe('getVideoIdFromUrl()', () => {
    it('Gets Video ID from Video URL', () => {
      expect(getVideoIdFromUrl('http://youtu.be/abc123')).toContain('abc123')
    })
  })

  describe('sortDateAscend()', () => {
    it('Sorts by Date in ascending order', () => {
      // expect().toContain()
    })
  })

  describe('sortDateDescend()', () => {
    it('Sorts by Date in descending order', () => {
      // expect().toContain()
    })
  })

  describe('stamp()', () => {
    it('Stamps a cache-buster version number on a URL string', () => {
      expect(stamp('http://numenta.com/')).toContain('0.2.')
    })
  })

  describe('trims()', () => {
    it('Trims multi-line es6 template strings', () => {
      expect(trims`Hello world.
                   How are you?`)
        .toContain('Hello world. How are you?')
    })
  })

})
