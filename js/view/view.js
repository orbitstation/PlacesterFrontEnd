//   default underscore template loader
//   this extends the view with the correct html template
var directory = {
    views: {},
    models: {},
    loadTemplates: function(views, callback) {
        var deferreds = [];
        $.each(views, function(index, view) {
            if (directory[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    directory[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });
        $.when.apply(null, deferreds).done(callback);
    }
};
//
//    View
//


directory.homePageView = Backbone.View.extend({
	render:function () {
        //console.log("HomeView");
        this.$el.html(this.template(this.model));
        return this;
    },
    sync: function(method, model, options) {
        if (method === "read") {
            directory.store.findById(1, function (data) {
                options.success(data);
            });
        }
    }
});


directory.singleArticleView = Backbone.View.extend({
    render: function  (){
        this.$el.html(this.template(this.model.attributes));
        return this;
    }
});

