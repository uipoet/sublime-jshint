#JSHint for Sublime Text

The best JavaScript syntax checker: [JSHint](http://www.jshint.com/) for the best text editor: [Sublime Text](http://www.sublimetext.com/2)

![ScreenShot](https://raw.github.com/uipoet/sublime-jshint/preview/jshint.png)

**Prerequisites:** [jshint](https://github.com/jshint/jshint) and [Sublime Package Control](http://wbond.net/sublime_packages/package_control/installation)

**Mac OS X:** Installing node with homebrew or macports is assumed. Use [SublimeFixMacPath](https://github.com/int3h/SublimeFixMacPath) for setting the correct OS X path. Supports [nvm - Node Version Manager](https://github.com/creationix/nvm)

**Linux:** Make sure jshint is in your environment path.

**Windows:** Installing node with the Windows Installer from nodejs.org is assumed.

##1. Terminal

    npm install -g jshint
    
**Note:** JSHint will use the first .jshintrc file found traversing from the active file in Sublime Text up to your project's root.

##2. Sublime Text Package Control

- `command`-`shift`-`p` *or* `control`-`shift`-`p` in Linux/Windows
- type `install p`, select `Package Control: Install Package`
- type `jshint`, select `JSHint`

**Note:** Without Sublime Package Control, you could manually clone to Packages directory as 'JSHint', exactly.

##3. JSHint an active JavaScript file

- `control`-`j` *or* `alt`-`j` in Linux/Windows *or* Tools/Contextual menus *or* the Command Palette
- `F4` jump to next error row/column
- `shift`-`F4` jump to previous error row-column

**Note:** The `control`-`j`/`alt`-`j` shortcut changes the Build System on the current file to JSHint, then Builds to run JSHint on the file and output any errors for jumping to within the file. You could alternatively set the Build System to Automatic and `command`-`b`/`control`-`b`/`F7`, but only on files that end with .js.

##JSHint on save

Install [SublimeOnSaveBuild](https://github.com/alexnj/SublimeOnSaveBuild)
