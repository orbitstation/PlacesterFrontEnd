//
//    Controller
//
directory.Router = Backbone.Router.extend({
	routes: {
		'' 	                : 'home',
        'singleArticle/:id' : 'singleArticle',
	},
    initialize: function () {
        this.$content = $(".content");
    },
	home: function(){
        var that = this;
        var emp = new directory.homePageModel();
        emp.fetch({
            success: function (data) {
                //console.log(data);
                that.$content.html(new directory.homePageView({model: data}).render().el);
            }
        });
	},
    singleArticle: function(id){
        if(id == null){id=1};
        var singleArticleModel = new directory.SingleArticleModel({id: id});
        var that = this;
        singleArticleModel.fetch({
            success: function (data) {
                //console.log(data);
                that.$content.html(new directory.singleArticleView({model: data}).render().el);
            }
        });
    }
});
