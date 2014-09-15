directory.ListingsStore = function (successCallback, errorCallback) {

    this.findByMls = function (num,callback){
        var listings = this.listings;

        listingsCollection = new Array();

        var l = listings.length;
        for (var i = 0; i < l; i++) {
            if (listings[i].mls == num) {
                listingsCollection.push(listings[i]);
            }
        }
        //console.log("pushed: "+listingsCollection[0].mls);
        callLater(callback, listingsCollection);
    }


    // Used to simulate async calls. This is done to provide a consistent interface with stores that use async data access APIs
    var callLater = function (callback, data) {
        if (callback) {
            setTimeout(function () {
                callback(data);
            });
        }
    }


    this.listings = [
        {
            number: "1",
            mls: "100", 
            imgUrl: ["mls100/mls100-1.jpg","mls100/mls100-2.jpg","mls100/mls100-3.jpg","mls100/mls100-4.jpg"], 
            name: "566 Hunnewell St, Needham",
            basicDetails: "$725,000",
            propertyFacts: ["Lot: 10,018 sqft","Single Family","Built in 2014"],
            amenitys: "4 beds, 1.5 baths, 2,405 sqft ",
            desc: "Showings start Friday. 2405 sf updated old-style Colonial sited on a large, level lot. Features include large kitchen with gas range, ss appliances and breakfast bar, dining room with french doors and fireplace, 4 bedrooms, first floor laundry, cathedral ceilinged family room, gas furnace and spacious 3rd floor bonus room. 2013-2014 new roof, siding, hot water heater, porch and decks. Charm abounds with hardwood floors, built-in cabinets, crown moldings, high ceilings and abundant natural light. Walk to town, commuter rail and Needham High School.",
        },
        {
            number: "2",
            mls: "101", 
            imgUrl: ["mls101/mls101-1.jpg","mls101/mls101-2.jpg","mls101/mls101-3.jpg","mls101/mls101-4.jpg"], 
            name: "62 Putnam St UNIT 62",
            basicDetails: "$579,000",
            propertyFacts: ["Lot: 10,018 sqft","Single Family","Built in 2014"],
            amenitys: "3 beds, 3.5 baths, 3,417 sqft ",
            desc: "Gorgeous townhouse in absolute pristine condition! High ceilings and oversized windows compliment the well-proportioned rooms in this like-single family home. Entry foyer welcomes you. The first floor features a gas fireplaced living room and dining room with sliders to a deck overlooking a private fenced-in yard, state-of-the-art chefs' kitchen offers high end appliances with custom cabinets and granite counters, family room overlooks the kitchen, laundry room and guest lav. The second floor",
        },
        {
            number: "3",
            mls: "102", 
            imgUrl: ["mls102/mls102-1.jpg","mls102/mls102-4.jpg","mls102/mls102-2.jpg"], 
            name: "101 Valley Rd, Needham, MA ",
            basicDetails: "$1,379,000",
            propertyFacts: ["Lot: 10,018 sqft","Single Family","Built in 2014"],
            amenitys: "4 beds, 1.5 baths, 2,405 sqft ",
            desc: "Gorgeous new construction from prominent hands on builder well known for quality and attention to detail. Embrace casual living or grand entertaining in well-appointed spaces. First floor 9' ceilings, custom finishes, moldings & red oak floors grace an open flow floor plan. Host guests in gracious LR w coffered ceiling & gas fireplace. Gather for special occasions in the formal DR w tray ceiling. Chef's granite kitchen boasts an 8' island. Relax in FR outfitted w gas fireplace and lovely",
        }

    ];
    callLater(successCallback);
}

directory.listingsStore = new directory.ListingsStore();
