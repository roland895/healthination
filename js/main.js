(function () {	

	$(".video-container>a").on("click",function(e){
		e.preventDefault();
		alert("event propagation canceled");
		
	});

} ());