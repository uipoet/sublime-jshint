(function (source) {
  if (typeof JSHINT === 'undefined') {
    print('Error: JSHINT not loaded.');
  }

  if (typeof JSHINT === 'undefined' || !source) {
    print('usage:\n $ jsc jslint.js jsc_jslint.js -- "`cat source.js`"');
    quit();
  }
  var
    errors = [],
    error = {},
    i,
    quantity,
    plural,
    result = JSHINT(source);

  if (result) {
    print('JSHint found no errors.');
  }
  else {
    errors = JSHINT.data().errors;
    quantity = errors.length + 1;
    if (quantity > 1) {
      plural = 's';
    }
    print('JSHint found ' + quantity + ' error' + plural + ':');
    for (i = 0; i < errors.length; i += 1) {
      error = errors[i];
      print(error.line + ',' + error.character + ': ' + error.reason + ' "' + (error.evidence || '').replace(/^\s+|\s+$/, "") + '"');
    }
  }
  quit();
}(arguments[0]));