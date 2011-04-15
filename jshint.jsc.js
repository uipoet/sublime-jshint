(function (source) {
  if (typeof JSHINT === 'undefined') {
    print('Error: JSHINT not loaded.');
  }

  if (typeof JSHINT === 'undefined' || !source) {
    print('usage:\n $ jsc jslint.js jsc_jslint.js -- "`cat source.js`"');
    quit();
  }
  var
    result = JSHINT(source),
    errors = [],
    error = {},
    i;

  if (result) {
    print('No errors.');
  }
  else {
    print((errors.length + 1) + ' errors');
    errors = JSHINT.data().errors;
    for (i = 0; i < errors.length; i += 1) {
      error = errors[i];
      print('Line ' + error.line + ', Column ' + error.character + ': ' + error.reason);
      print(error.evidence.trim());
    }
  }
  quit();
}(arguments[0]));