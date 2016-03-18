var gulp = require('gulp');
var exec = require('child_process').exec;
var pod  = process.env.PODNAME || "podname_unconfigured";

var match_on = "index.html";
var watcher = gulp.watch(match_on, ['default']);

gulp.task('default', function(cb) {
  // Rsync content into a remote container
  exec("oc rsync --include='"+match_on+"' --exclude='node_modules*' . "+pod+":", function(err) {
    if (err) return cb(err); // return error
    cb(); // finished task
  });
});
