exports.reporter = function (errors, results) {
  var
    buffer = '',
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

  buffer += '[JSHint: ' + results[0].file + ']\n\n';

  if (errors.length) {
    if (errors.length > 1) {
      title += 's';
    }

    errors.forEach(function (result) {
      var
        error = result.error;

      buffer += numberWang((error.line + error.character.toString()).length) + ' ' + error.line + ',' + error.character + ':' + ' ' + error.reason + '\n';
    });

    buffer += '\n✗ ' + errors.length + ' ' + title + ', double-click above, [F4] for next, [shift-F4] for previous.\n';

  } else {
    buffer += '✓ 0 errors, [esc] to hide.\n';
  }

  console.log(buffer);
};
