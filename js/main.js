$( document ).ready(function() {

	$("a").on("click",function(e){
		alert("event propagation canceled");
		e.preventDefault();
	});

});
