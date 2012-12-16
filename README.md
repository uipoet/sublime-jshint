#JSHint for Sublime Text 2

The best JavaScript syntax checker: [JSHint](http://www.jshint.com/) for the best text editor: [Sublime Text 2](http://www.sublimetext.com/2)

**Prerequisites:** [jshint](https://github.com/jshint/jshint) and [Sublime Package Control](http://wbond.net/sublime_packages/package_control/installation)

**Mac OS X:** Installing node with homebrew or macports is assumed. The path to jshint is hardcoded in this plugin as `/usr/local/bin:/opt/local/bin`. There is no reliable way to get the path from your environment.

**Linux:** Make sure jshint is in your environment path.

**Windows:** Installing node with the Windows Installer from nodejs.org is assumed. **Known Bug:** Sublime Text 2 for Windows doesn't show the console output. As a temporary hack, you can output to a file. See issue #23.

##Install node-jshint with npm

    npm install -g jshint

##Install JSHint with Package Control in Sublime Text 2

1. `command`-`shift`-`P` *or* `control`-`shift`-`P` in Linux/Windows*
2. type `install p`, select `Package Control: Install Package`
3. type `jshint`, select `JSHint`

**Note:** Without Sublime Package Control, you could manually clone to Packages directory as 'JSHint', exactly.

##Run JSHint on an active JavaScript file in Sublime Text 2

- `control`-`J` *or Tools/Contextual menus or the Command Palette*
- `F4` jump to next error row/column
- `shift`-`F4` jump to previous error row-column

**Note:** The `control`-`J` shortcut changes the Build System on the current file to JSHint, then Builds to run JSHint on the file and output any errors for jumping to within the file. You could alternatively set the Build System to Automatic and `command`-`B`/`control`-`B`/`F7`, but only on files that end with .js.

##Run JSHint on save

Install [SublimeOnSaveBuild](https://github.com/alexnj/SublimeOnSaveBuild)
