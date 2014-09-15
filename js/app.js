//
//   the program starts here , document.ready
//
$(document).on("ready", function () {
	directory.loadTemplates(["homePageView"],
    function () {
		directory.router = new directory.Router();
        Backbone.history.start();
	});
});





//  generic functions
function HTMLEncode(str){
    var i = str.length,
    aRet = [];
    while (i--) {
        var iC = str[i].charCodeAt();
        if (iC < 65 || iC > 127 || (iC>90 && iC<97)) {
            aRet[i] = '&#'+iC+';';
        }
        else{
            aRet[i] = str[i];
        }
    }
    return aRet.join('');    
}

