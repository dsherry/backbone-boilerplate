module.exports = ->
  @loadNpmTasks "grunt-contrib-clean"

  # Wipe out previous builds and test reporting, and old handlebars templates
  @config "clean", [
    "dist/"
    "test/reports"
    "app/templates/templates.js"
  ]
