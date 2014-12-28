module.exports = ->

  @loadNpmTasks "grunt-contrib-handlebars"

  @config "handlebars",
    options:
      namespace: 'Templates'
      amd: true
    all:
      files:
        'app/templates/templates.js': 'app/templates/*.hbs'

