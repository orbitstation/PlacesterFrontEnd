//
//    Controller
//
directory.Router = Backbone.Router.extend({
	routes: {
		'' 	          : 'home',
        'listing/:id' : 'listing',
	},
    initialize: function () {
        this.$content = $(".content");
    },
	home: function(){
        console.log('triggered: home page');
        var that = this;
        var emp = new directory.homePageModel();
        emp.fetch({
            success: function (data) {
                //console.log(data);
                that.$content.html(new directory.homePageView({model: data}).render().el);
                window.scrollTo(0,0);
            }
        });
	},
    listing: function(id){
        //console.log('triggered: listing');
        if(id == null){id=1};
        var listingModel = new directory.listingModel({id: id});
        var that = this;
        listingModel.fetch({
            success: function (data) {
                //console.log(data);
                that.$content.html(new directory.listingView({model: data}).render().el);
                window.scrollTo(0,0);
            }
        });
    }
});
