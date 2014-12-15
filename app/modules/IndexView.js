define(function(require, exports, module) {
    // External dependencies.
    var Backbone = require("backbone");
    var LayoutManager = require("layoutmanager");

    var IndexView = Backbone.View.extend({
        template: "index",

        initialize: function() {
            this.render();
        },

        // serialize: function() {
        //     return {};
        // },

        // fetch: function(path) {
        //     debugger;
        //     console.log(path);
        //     var done = this.async();
        //     $.get(path + ".hbs", function(contents) {
        //         done(contents);
        //     });
        // },

        // render: function() {
        //     debugger;
        //     //var source = this.fetch(this.template);
        //     var source = '<p>compiled</p>';
        //     var template_compiled = Handlebars.compile(this.template);
        //     var html = template_compiled();
        //     //return html;
        //     this.$el.html(html);
        //     return this;
        // }
    });

    module.exports = IndexView;
});
