import os

import sublime
import sublime_plugin


class JshintCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        jshint_exe = self.view.settings().get('jshint_bin', 'jshint')
        filepath = self.view.file_name()
        packages = sublime.packages_path()
        args = {
            "cmd": [
                jshint_exe,
                filepath,
                "--reporter",
                os.path.join(packages, "sublime-jshint", "reporter.js")
            ],
            "file_regex": r"JSHint: (.+)\]",
            "line_regex": r"(\d+),(\d+): (.*)$"
        }

        if sublime.platform() == "windows":
            args['cmd'][0] += ".cmd"
        elif sublime.platform() == "osx":
            args['path'] = "/usr/local/share/npm/bin:/usr/local/bin:/opt/local/bin"

        self.view.window().run_command('exec', args)
