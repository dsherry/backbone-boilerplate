define(function(require, exports, module) {
    // External dependencies.
    var Backbone = require("backbone");
    var LayoutManager = require("layoutmanager");

    var IndexView = Backbone.View.extend({
        template: "#index_template"
    });

    module.exports = IndexView;
});
