function connectTime() {
  return window.performance.timing.connectEnd - window.performance.timing.connectStart
}

function dnsTime() {
  return window.performance.timing.domainLookupEnd - window.performance.timing.domainLookupStart
}

function loadTime() {
  const loadEventEnd = window.performance.timing.loadEventEnd
  if (loadEventEnd === 0) {
    console.warn('called pageloadTools.loadTime() before pageload completed, cannot calculate value') // eslint-disable-line
    return null
  }
  return loadEventEnd - window.performance.timing.navigationStart
}

export default {
  connectTime,
  dnsTime,
  loadTime,
}
