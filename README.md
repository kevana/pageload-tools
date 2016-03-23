# Pageload tools

Tools to help you do things based on how pageload went for the user

## Usage
```
npm install pageload-tools
```
In your code:
```
var pageloadTools = require('pageload-tools');
console.log('Total pageload time:', pageloadTools.loadTime());
```

## API
### connectTime()
Returns the number of milliseconds the browser took to establish a connection to the server.

### loadTime()
Returns the number of milliseconds the page took to load, from `navigationStart` to `loadEventEnd`. Will return null if called before `loadEventEnd` has occurred.
