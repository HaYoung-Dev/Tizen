var jsonClick = false;

(function () {
	var pageElement = document.getElementById("page-virtuallist"),
		virtualListWidget,
		listHelper;

	pageElement.addEventListener("pagebeforeshow", function () {		
		var listElement = document.getElementById("vlist"),
			bufferSize = 10,
			options = {
				dataLength: 0,
				bufferSize: bufferSize,
				snap : {animate: "scale"}
			};

		if(jsonClick){
			jsonClick = false;
			options.dataLength = JSON_DATA_100.length;
		} else{
			jsonClick = true;
			options.dataLength = JSON_DATA_20.length;
		}
		
		virtualListWidget = tau.widget.Listview(listElement, options);
		
		virtualListWidget.setListItemUpdater(function (listElement, newIndex) {
			var data = (jsonClick) ? JSON_DATA_20[newIndex] : JSON_DATA_100[newIndex];
			
			listElement.innerHTML = "<div>" +data.NAME+ "</div>";			
		});
	});

	pageElement.addEventListener("pagehide", function () {
		// Remove all children in the virtual list
		virtualListWidget.destroy();

		if (listHelper) {
			listHelper.destroy();
		}
	});
}());