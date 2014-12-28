module.exports = ->
  @loadNpmTasks "grunt-contrib-jshint"

  # Run your source code through JSHint's defaults.
  @config "jshint",
    options:
      sub: true
    all:
      src:
        [
          "app/**/*.js"
        ]
