# Pageload tools

Tools to help you change site behavior based on pageload metrics

This is a collection of convenience methods for the [Navigation Timing API](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API)

## Usage
```
npm install pageload-tools
```
This module is distributed in UMD format so you can use WebPack, Browserify, or drop the script right on the page
In your code:
```
<script src="pageload-tools.js"></script>
```
or:
```
import pageloadTools from 'pageloadTools'
```
or:
```
var pageloadTools = require('pageload-tools');
```
Then you can
```
console.log('Total pageload time:', pageloadTools.loadTime());
if (pageloadTools.loadTime() > 5000) {
    // change behavior based on perceived load speed for the user.
    alert('Pageload was really slow, sorry!')
}
```

## API
### connectTime()
Returns the number of milliseconds the browser took to establish a connection to the server.

### loadTime()
Returns the number of milliseconds the page took to load, from `navigationStart` to `loadEventEnd`. Will return null if called before `loadEventEnd` has occurred.

### dnsTime()
Returns the number of milliseconds the browser took to resolve DNS.