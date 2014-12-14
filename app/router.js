define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");
    var LayoutManager = require("layoutmanager");

    var IndexView = require("app/modules/IndexView.js");

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function() {
            console.log("Welcome to your / route.");

            var main = new LayoutManager({
                el: ".container",
                template: "#main"
            });

            main.setView(".index_template_container", new IndexView());
            main.render();
        }
    });

    module.exports = Router;
});
