'use strict';

module.exports = {

  reporter: function (errors, results, done) {

    var
      errorString = 'Error',
      warningString = 'Warning',
      file = results[0].file,
      errorLength, warningLength, globals, orphans;

    function numberWang(wangaNumb) {
      var
        thatsNumberWang = 8 - wangaNumb,
        stayNumberWang = '', i;

      for (i = 0; i < thatsNumberWang; i += 1) {
        stayNumberWang += ' ';
      }

      return stayNumberWang;
    }

    console.log('[JSHint file:', file + ']');

    results.forEach(function (result) {

      globals = result.implieds;
      orphans = result.unused;

      warningLength = (globals ? globals.length : 0) + (orphans ? orphans.length : 0);

      if (warningLength > 1) {
        warningString += 's';
      }

    });

    if (errors) {
      errorLength = errors.length;

      if (errorLength > 0) {
        if (errorLength > 1) {
          errorString += 's';
        }

        console.log(' ', errorLength, errorString + ':');

        errors.forEach(function (result) {
          var error = result.error;

          console.log(numberWang((error.line.toString() + error.character.toString()).length), error.line + ',' + error.character + ':', error.reason);
        });
      }
    }

    if (warningLength > 0) {
      console.log(' ', warningLength, warningString + ':');

      if (globals) {
        globals.forEach(function (global) {
          console.log(numberWang(global.line.toString().length + 1), global.line + ',1: \'' + global.name + '\' is an implied global variable.');
        });
      }

      if (orphans) {
        orphans.forEach(function (orphan) {
          console.log(numberWang(orphan.line.toString().length + 1), orphan.line + ',1: \'' + orphan.name + '\' is an unused variable.');
        });
      }
    }
  }
};
