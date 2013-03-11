var path = require('path'),
    defaultRouter = path.basename;
module.exports = function (grunt) {
  /**
   * Add directory and routing functionality to grunt task
   * @param {Function} task Function to call with grunt options
   * @param {Object} this<Context> Same context as one would expect from grunt
   * @return {String[]} Array of destination files written out to
   */
  function gruntMixinDir(task) {
    // Localize information
    var file = this.file,
        data = this.data,
        router = data.router || defaultRouter,
        src = file.src,
        destDir = file.dest,
        srcFiles = grunt.file.expand(src);
console.log(this.file, this.data, srcFiles);
    // Iterate over files and pretty print each one
    var destFiles = srcFiles.map(function prettyprintDirFile (srcFile) {
      // Determine the end path for the file
      var destFile = router(srcFile),
          destPath = path.join(destDir, destFile);
console.log(srcFile);
      // Run the task with our options
      task.call({
        file: {src: srcFile, dest: destPath},
        data: data
      });

      // Return the destination
      return destPath;
    });

    // Return information about what happened
    var retObj = {
      srcFiles: srcFiles,
      router: router,
      destFiles: destFiles
    };
    return retObj;
  }
  return gruntMixinDir;
};