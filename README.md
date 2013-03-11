# grunt-mixin-dir

Utility to add directory handling to your grunt task

## Getting Started
Install the module with: `npm install grunt-mixin-dir`

```javascript
var gruntMixinDir = require('grunt-mixin-dir')(grunt);

// Set up your task for directories
grunt.registerMultiTask('your-task-dir', 'Run your task on a directory', function () {
  // Run gruntMixinDir with your task on `this`
  var taskInfo = gruntMixinDir.call(this, yourTask);

  // Print your success message
  grunt.log.writeln('File "' + taskInfo.destFiles.join('", "') + '" created.');
});
```

## Documentation
`grunt-mixin-dir` is a standalone function

```js
gruntMixinDir.call(this, task);
/**
 * Add directory and routing functionality to grunt task
 * @param {Function} task Function to call with grunt options
 * @param {Object} this Same context as one would expect from grunt
 * @param {Object} this.file Container for src and dest
 * @param {String|String[]} this.file.src File or list of files to use as input
 * @param {String} this.file.dest Directory to send all output to
 * @param {Object} this.data Container for additional input
 * @param {Function} [this.data.router] Routing function for determining names of files to output
 * @return {Object} Contains {srcFiles, router, destFiles}; the expanded filenames passed into `task`
 */
```

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

## License
Copyright (c) 2013 Todd Wolfson
Licensed under the MIT license.
