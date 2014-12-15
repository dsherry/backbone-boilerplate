require.config({
    paths: {
        // dependencies
        "underscore": "../bower_components/lodash/dist/lodash.underscore",
        "lodash": "../bower_components/lodash/dist/lodash",
        "template": "../bower_components/lodash-template-loader/loader",
        "jquery": "../bower_components/jquery/dist/jquery",
        "backbone": "../bower_components/backbone/backbone",
        "handlebars": "../bower_components/handlebars/handlebars",
        "layoutmanager": "../bower_components/layoutmanager/backbone.layoutmanager",

        // views
        "indexview": "modules/IndexView",
    },

    deps: [
        // load backbone and layoutmanager before main app
        "backbone",
        "layoutmanager",
        "handlebars",
        "main"
    ],

    shim: {
        'handlebars': { exports: 'Handlebars' },
        'underscore': { exports: '_' },
        'jquery': { exports: '$' },
        'backbone': {
            // load underscore and jquery first
            deps: ["underscore", "jquery", "handlebars"],
            // make backbone accessible via global Backbone
            exports: 'Backbone'
        }
    },

    callback: function() {
        var Handlebars = require("handlebars");
        Backbone.Layout.configure({
            // we're managing all views by default
            manage: true,

            // path to templates
            paths: {
                template: "app/templates",
            },

            prefix: "app/templates",

            fetchTemplate: function(path) {
                debugger;
                console.log(path);
                var done = this.async();
                $.get(path + ".hbs", function(contents) {
                    done(Handlebars.compile(contents));
                }, "text");
            },

            render: function() {
                debugger;

                // var source = '<p>compiled</p>';
                // var template_compiled = Handlebars.compile(source);
                // var html = template_compiled();
                var html = template_compiled();
                this.$el.html(html);
                return this;
                // return Handlebars.compile(template)(context);
            },
        });
    }
});
