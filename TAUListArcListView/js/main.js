var songs = [];

(function(){
	var page = document.getElementById("main"),
	btnList = document.getElementById("btnList"),
		
	btnClickHandler = function() {
		songs = [];	
		var count = Math.floor(Math.random() * 10) + 10;
		
		console.log("### count="+count);
		
		for(var i=0; i<count; i++) {
			songs.push({"song_name":"다시 여기 바닷가 다시 여기 바닷가","artists":[{"artist_name":"유두래곤"}, {"artist_name":"린다G"}, {"artist_name":"비룡"}],"rank":{"current_rank":"1","past_rank":"10"}});	
		}

		tau.changePage("arcList");
	},
	
	pagecreateHandler = function() {
		console.log("## page : "+page.id+ " , pagecreateHandler");					
	},
	
	pageshowHandler = function() {
		console.log("## page : "+page.id+ " , pageshowHandler");
		
		btnList.addEventListener("click",btnClickHandler,false);
	},
	
	pageHideHandler = function() {
		console.log("## page : "+page.id+ " , pageHideHandler");
		
		btnList.removeEventListener("click",btnClickHandler,false);
	};

	page.addEventListener("pagecreate",pagecreateHandler,false);
	page.addEventListener("pageshow",pageshowHandler,false);
	page.addEventListener("pagehide", pageHideHandler, false);
}());