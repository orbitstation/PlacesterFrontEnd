//
//    model
//
directory.homePageModel = Backbone.Model.extend({
    sync: function(method, model, options) {
        if (method === "read") {
            directory.store.collectPageData(function (data) {
                options.success(data);
            });
        }
    }
});


directory.SingleArticleModel = Backbone.Model.extend({
    sync: function(method, model, options) {
        if (method === "read") {
            directory.store.findById(parseInt(this.id), function (data) {
                options.success(data);
            });
        }
    }
});

