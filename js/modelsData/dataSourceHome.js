directory.MemoryStore = function (successCallback, errorCallback) {


    this.collectPageData = function (callback){
        var neighborhoods = this.neighborhoods;


        // build the objects to house some arrays
        var dataCollection = {
          "hoods": {},
          "listings": {}
          //etc, etc
        };

        dataCollection.hoods = new Array();

        // load all the hoods
        var l = neighborhoods.length;  // or a variable to get just a few
        for (var i = 0; i < l; i++) {
            dataCollection.hoods.push(neighborhoods[i]);
        }

        // todo: load the next section and add the json data for it below

        callLater(callback, dataCollection);
    }



    // Used to simulate async calls. This is done to provide a consistent interface with stores that use async data access APIs
    var callLater = function (callback, data) {
        if (callback) {
            setTimeout(function () {
                callback(data);
            });
        }
    }


this.neighborhoods = [
    {
        number: "1",
        name: "Braxton", 
        imgUrl: "images/neighborhoods/braxton.jpg", 
        title: "Braxton", 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
    },
    {
        number: "2",
        name: "Beverly Hills", 
        imgUrl: "images/neighborhoods/beverlyHills.jpg", 
        title: "Beverly Hills", 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
    },
    {
        number: "3",
        name: "Wittington", 
        imgUrl: "images/neighborhoods/wittington.jpg", 
        title: "Wittington", 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
    },
    {
        number: "4",
        name: "lankashire", 
        imgUrl: "images/neighborhoods/lankashire.jpg", 
        title: "Lankashire", 
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
    }
];
callLater(successCallback);
}

directory.store = new directory.MemoryStore();
