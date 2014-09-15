directory.MemoryStore = function (successCallback, errorCallback) {

    this.collectPageData = function (callback){
        var neighborhoods = this.neighborhoods;
        var tourListings  = this.tourListings;

        // build the objects to house some arrays
        var dataCollection = {
          "hoods": {},
          "listings": {}
          //etc, etc
        };


        // load all the hoods
        dataCollection.hoods = new Array();
        var l = neighborhoods.length;  // or a variable to get just a few
        for (var i = 0; i < l; i++) {
            dataCollection.hoods.push(neighborhoods[i]);
        }

        // load all the tours
        dataCollection.listings = new Array();
        var l = tourListings.length;  // or a variable to get just a few
        console.log(tourListings.length);
        for (var i = 0; i < l; i++) {
            dataCollection.listings.push(tourListings[i]);
        }

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



    //
    //   the actual JSON data is hard coded here, but it could also come from an ajax source. 
    //    -for a real REST enviroment, modify the callLater function above to get an ajax page.
    //
    this.neighborhoods = [
        {
            number: "1",
            mls: "100",
            name: "Braxton", 
            imgUrl: "images/neighborhoods/braxton.jpg", 
            title: "Braxton", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
        },
        {
            number: "2",
            mls: "101",
            name: "Beverly Hills", 
            imgUrl: "images/neighborhoods/beverlyHills.jpg", 
            title: "Beverly Hills", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
        },
        {
            number: "3",
            mls: "103",
            name: "Wittington", 
            imgUrl: "images/neighborhoods/wittington.jpg", 
            title: "Wittington", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
        },
        {
            number: "4",
            mls: "104",
            name: "lankashire", 
            imgUrl: "images/neighborhoods/lankashire.jpg", 
            title: "Lankashire", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ex ante",
        }
    ];



    this.tourListings = [
        {
            number: "1",
            mls: "100",
            imgUrl: "images/listings/mls100/mls100-1.jpg", 
            address: "566 Hunnewell St, Needham", 
            agent: "Victoria Mejia Sanchez",
            dre: "01187554",
            desc: "Courtest of Rodeo Realty"
        },
        {
            number: "2",
            mls: "101",
            imgUrl: "images/listings/mls101/mls101-1.jpg", 
            address: "62 Putnam St UNIT 62", 
            agent: "Michael Boston",
            dre: "007007007",
            desc: "Click the address to see the listings template page"
        },
        {
            number: "3",
            mls: "102",
            imgUrl: "images/listings/mls102/mls102-2.jpg", 
            address: "101 Valley Rd, Needham, MA", 
            agent: "Victoria Mejia Sanchez",
            dre: "01187554",
            desc: "Courtest of Rodeo Realty"
        }
    ];


    callLater(successCallback);
}

directory.store = new directory.MemoryStore();
