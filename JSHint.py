import sublime, sublime_plugin

class JshintCommand(sublime_plugin.WindowCommand):
  def run(self):
    self.window.run_command('set_build_system', {
      'file': 'Packages/JSHint/JSHint.sublime-build'
    })
    self.window.run_command('build')
