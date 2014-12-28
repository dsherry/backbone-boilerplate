module.exports = ->

  @loadNpmTasks "grunt-contrib-handlebars"

  @config "handlebars",
    options:
      namespace: 'Templates'
      amd: true
      processName: (path) ->
        regex = /(app\/templates\/)(.*)(\.hbs)/g
        regex.exec(path)[2]
    all:
      files:
        'app/templates/templates.js': 'app/templates/*.hbs'

