/* eslint-env mocha */
import pageloadTools from '../src/index'

import expect from 'expect'

global.window = {
  performance: {
    timing: {
      navigationStart: 1458615504743,
      connectStart: 1458615504751,
      connectEnd: 1458615504763,
      domainLookupStart: 1459032265695,
      domainLookupEnd: 1459032265731,
      loadEventEnd: 1458615504793,
    },
  },
}

describe('connectTime()', () => {
  it('should get connection time', () => {
    expect(pageloadTools.connectTime()).toBe(12)
  })
})
describe('dnsTime()', () => {
  it('should get connection time', () => {
    expect(pageloadTools.dnsTime()).toBe(36)
  })
})
describe('loadTime()', () => {
  it('should return total pageload time', () => {
    expect(pageloadTools.loadTime()).toBe(50)
  })
})
