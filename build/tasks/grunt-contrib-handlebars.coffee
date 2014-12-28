module.exports = ->

  @loadNpmTasks "grunt-contrib-handlebars"

  @config "handlebars",
    compile:
      options:
        namespace: "Handlebars.templates"
        processName: (filePath) ->
          pieces = filePath.split('/');
          pieces[pieces.length - 1].split('.')[0];

      files:
        'templates/compiled.js': 'templates/*.hbs'

