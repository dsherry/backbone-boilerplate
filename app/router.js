define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");
    var LayoutManager = require("layoutmanager");
    var templates = require("templates");

    // doing this is fine, but it really fucks with karma since that's getting loaded in a different dir
    //var IndexView = require("../app/modules/IndexView.js");
    var IndexView = require("indexview");

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function() {
            console.log("Welcome to your / route.");

            var main = new LayoutManager({
                el: ".container",
                template: Templates["app/templates/main.hbs"]
            });

            //debugger;
            main.setView(".content", new IndexView());
            main.render();
        }
    });

    module.exports = Router;
});
