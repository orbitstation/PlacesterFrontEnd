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


directory.listingModel = Backbone.Model.extend({
    sync: function(method, model, options) {
        if (method === "read") {
            directory.listingsStore.findByMls(parseInt(this.id), function (data) {
                options.success(data);
            });
        }
    }
});

