$("a[rel=shadowbox]").fancybox({
				'cyclic' : 	true,
				//'autoScale' : 	true,
				'centerOnScroll ' :	true,
				'overlayOpacity' : 	0.8,
				'overlayColor' : '#000',
				'titleShow' : 	false,
				'transitionIn'	: 'fade',
				'transitionOut'	: 'fade'
			});





/***********************************/
/*            Modules      */
/***********************************/

/* objet carrousel d'images */
zoomFont = {
	/* lancement du carrousel*/
	init : function(){

		console.log(zoomFontLess);
		less = $("#less")
		more = $("#more")
		less.on("click",zoomFont.zoomFontLess)
		//more.on("click",zoomFont.zoomFontMore)
	},
	zoomFontLess : function(){
		//var body = $(document.body)
		var currentSize = $(document.body).css("fontSize")
		var currentSizeNum = $(document.body).parseFloat(currentSize, 10)
		var newSize = $(document.body).currentSizeNum*0.8
		body.css("fontSize", newSize)
    	return false;

	}



}


/***********************************/
/*            Objet principal      */
/***********************************/

app = {
	/** chargement du DOM **/
	init: function() {
		console.log("app.init")

		//on lance le carrousel
		zoomFont.init()
	}

}

/***********************************/
/*         Chargement du DOM       */
/***********************************/
$(function(){
	console.log("chargement du dom")
	app.init()
})

