$(function(){
	// toggle / animate pallete
	$('#stamp-pad-nav').hide();
	$('#stamp-pad').click(function(){
		$('#stamp-pad-nav').show();
	});

	// cursor to icon 
	$('#canvas').mouseout(function(){
               $('#mycursor').hide();
               return false;
          });
          $('#canvas').mouseenter(function(){
               $('#mycursor').show();
               return false;
          });
          $('#canvas').mousemove(function(e){
               $('#mycursor').css('left', e.clientX - 20).css('top', e.clientY + 7);
     });
     
	// set canvas to fullscreen
 	$("canvas").attr('height',$(document).height());
	$("canvas").attr('width', $(document).width());

	//load bkgd img
	$("canvas").drawImage({
		  		source: "imgs/bkgd.jpg",
		 		x: 0, 
		 		y: 0, 
		 		height : $(document).height(),
		 		width : $(document).width(),
		 		fromCenter: false
			});
			
	// resize window event
	$(window).resize(function(){
			//console.log($(window).height()+', '+$(window).width());
			$("canvas").attr('height',$(document).height());
			$("canvas").attr('width', $(document).width());
			$("canvas").drawImage({
		  		source: "imgs/bkgd.jpg",
		 		x: 0, 
		 		y: 0, 
		 		height : $(document).height(),
		 		width : $(document).width(),
		 		fromCenter: false
			});
		});
	
	$("canvas").scaleCanvas({
			 x: 100, y: 100,
		 	 width: 1, height: 1
	})
	// get cursor coordinates
	 $(document).mousemove(function(e){ 
		 $.mynamespace = { 
			 	 xpos : parseInt(e.pageX), 
				 ypos : parseInt(e.pageY), 
				 width : 200, 
				 height : 200
		 }; 
		 });
		// fire stamp function 
	function stamp()
		{
			$("canvas").drawImage({
		  		source: "imgs/dog.png",
		 		x: $.mynamespace.xpos, 
		 		y: $.mynamespace.ypos
			});
		}
	
	$(document).click(function (){
		// log function
		stamp();
	});
	
});//END Doc Ready
