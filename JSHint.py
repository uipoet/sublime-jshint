import os

import sublime
import sublime_plugin


class JshintCommand(sublime_plugin.TextCommand):
    def run(self, edit):
        filepath = self.view.file_name()
        packages = sublime.packages_path()
        args = {
            "cmd": [
                "jshint",
                filepath,
                "--reporter",
                os.path.join(packages, "JSHint", "reporter.js")
            ],
            "file_regex": r"JSHint: (.+)\]",
            "line_regex": r"(\d+),(\d+): (.*)$"
        }

        if sublime.platform() == "windows":
            args['cmd'][0] += ".cmd"

        self.view.window().run_command('exec', args)
