module.exports = ->

  @loadNpmTasks "grunt-contrib-handlebars"

  @config "handlebars",
    all:
      files:
        'app/templates/templates.js': 'app/templates/*.hbs'

