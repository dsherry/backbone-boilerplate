define(function(require, exports, module) {
    // External dependencies.
    var Backbone = require("backbone");
    var LayoutManager = require("layoutmanager");
    var Handlebars = require("handlebars");
    var templates = require("templates");

    var IndexView = Backbone.View.extend({
        template: Templates["index"],
    });

    module.exports = IndexView;
});
