/* 
  Created by Art Sites Studio
  Site: art-sites.org
  Version: 1.0
*/

(function( $ ){

  var methods = {
    init : function( params ) { 
     	var s = $.extend({
			input : false,
			inputDef : false,
			defText : '',			
		}, params);
      if (typeof $global === "undefined") {$global = {};};
     	if (s.input && s.inputDef) {
     		if (geoContry !== "") {
          $global.contry = geoContry;
		  		$(s.input).text(geoContry);
		  	}else{
		  		$(s.inputDef).html(defText);
		  	}
     	}else{
     		console.error("Miss argument");
     	}

    },
  };

  $.aGeo = function( method ) {
    
    // логика вызова метода
    if ( methods[method] ) {
      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
    } else if ( typeof method === 'object' || ! method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.aGeo' );
    } 
  };

})(jQuery)