exports.reporter = function (errors, results) {
  var
    title = 'error';

  function numberWang(wangaNumb) {
    var
      thatsNumberWang = 5 - wangaNumb,
      stayNumberWang = '', i;

    for (i = 0; i < thatsNumberWang; i += 1) {
      stayNumberWang += ' ';
    }

    return stayNumberWang;
  }

  console.info('[JSHint:', results[0].file + ']\n');

  if (errors.length) {
    if (errors.length > 1) {
      title += 's';
    }

    errors.forEach(function (result) {
      var
        error = result.error;

      console.error(numberWang((error.line + error.character.toString()).length), error.line + ',' + error.character + ':', error.reason);
    });

    console.error('\n ✗', errors.length, title + ', double-click above, [F4] for next, [shift-F4] for previous.\n');

  } else {
    console.info(' ✓ 0 errors, [esc] to hide.\n');
  }
};
