define(function(require, exports, module) {
    "use strict";

    // External dependencies.
    var Backbone = require("backbone");
    var LayoutManager = require("layoutmanager");

    // Defining the application router.
    var Router = Backbone.Router.extend({
        routes: {
            "": "index"
        },

        index: function() {
            console.log("Welcome to your / route.");

            var main = new LayoutManager({
                name: "#main"
            });
        }
    });

    module.exports = Router;
});
