var grunt = require('grunt'),
    gruntMixinDir = require('../lib/grunt-mixin-dir.js')(grunt);

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

var outline = {
  'A router-less set of options': {
    'processed via grunt-mixin-dir': {
      'outputs content in the dest directory': true
    }
  },
  'A router-ful set of options': {
    'processed via grunt-mixin-dir': {
      'outputs content in the dest directory with routing adjustments': true
    }
  }
};

exports['grunt-mixin-dir'] = {
  'routerless': function (test) {
    // Set up
    test.expect(1);

    // Run gruntMixinDir and save everything
    var destFiles,
        info = gruntMixinDir.call({
          src: ['
        }, function (options) {
          //
        });

    // Run our
    test.equal(grunt_mixin_dir.awesome(), 'awesome', 'should be awesome.');
    test.done();
  }
};
