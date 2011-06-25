setlocal
for %%F in (%0) do set dirname=%%~dpF
cscript "%dirname%jshint.wsh.js" %1