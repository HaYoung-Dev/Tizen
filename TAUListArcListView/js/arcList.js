(function(){
	var page = document.getElementById("arcList"),
	elList = document.getElementById("arcListView"),
	elTitle = document.getElementById("arcListTitle"),
	listView,
	listViewSelectId = -1,
	elScroller,
	
	createListView=function(){	
		elTitle.innerHTML = songs.length + " items"; 
		if( songs.length ) {
			for(var i=0 in songs) {			
				artists = ""; curr = 0; past = 0; rank = "";
				
				for( var j=0 in songs[i].artists ) {
					if( j == songs[i].artists.length - 1 )
						artists += songs[i].artists[j].artist_name;
					else
						artists += songs[i].artists[j].artist_name + ", ";
				}


				curr = parseInt(songs[i].rank.current_rank);
				past = parseInt(songs[i].rank.past_rank);
				
				rank = curr - past;
				
				if( rank == 0 ) rank = "<span>-</span>", color = "rgba(255, 255, 255, 0.55)";
				else if( rank > 0 ) rank = "<span>"+rank+"</span>", color = "#E77917";
				else if( rank < 0 ) rank = "<span>"+Math.abs(rank)+"</span>", color = "#94BDEB";
				
				elList.innerHTML +=
					'<li class="ui-li-has-multiline">'
						+'<div class="ui-marquee ui-marquee-gradient ui-li-anchor">'
							+'<span class="song-name">' + songs[i].song_name + '</span>'	
							+'<span class="song-number">' + songs[i].rank.current_rank + '</span>'							
						+'</div>'
						+'<div class="li-text-sub ui-li-sub-text">'
							+'<span class="song-rank" style="color:'+color+'">' + rank + '</span>'
							+'<span class="song-artist">' + artists +'</span>'
						+'</div>'
					+'</li>';
			}

			listView = page.querySelector(".ui-arc-listview");		
			listHelper = tau.widget.ArcListview(listView);				
		} else {
			alert("No Songs");
		}
	},
	
	destroyListView = function(){			
		if (listHelper) {
			listHelper.destroy();

			listHelper = null;
		}
	},
		
	pagecreateHandler = function() {
		console.log("## page : "+page.id+ " , pagecreateHandler");					
	},
	
	pageshowHandler = function() {
		console.log("## page : "+page.id+ " , pageshowHandler");	

		createListView();
	},
	
	pageHideHandler = function() {
		console.log("## page : "+page.id+ " , pageHideHandler");

		destroyListView();
	};

	page.addEventListener("pagecreate",pagecreateHandler,false);
	page.addEventListener("pageshow",pageshowHandler,false);
	page.addEventListener("pagehide", pageHideHandler, false);
}());