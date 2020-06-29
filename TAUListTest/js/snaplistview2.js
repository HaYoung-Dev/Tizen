/* global tau */
(function () {
	var page = document.getElementById("page-scrolltoposition"),
		slist = document.getElementById("slist"),
		listHelper,
		elScroller;

	page.addEventListener("pagebeforeshow", function () {
		var list;
		
		for(var i in JSON_DATA_100){
			slist.innerHTML += "<li>" +JSON_DATA_100[i].NAME+ "</li>";
		}
		
		elScroller = page.querySelector(".ui-scroller");
		if (elScroller) {
			list = elScroller.querySelector(".ui-listview");
		}

		if (elScroller && list) {
			listHelper = tau.helper.SnapListStyle.create(list, {animate: "scale", snapListview: false});
			var snap = listHelper.getSnapList();
			snap.scrollToPosition(50);
		}
	});

	page.addEventListener("pagebeforehide", function () {
		if (listHelper) {
			listHelper.destroy();
			listHelper = null;
			slist.innerHTML = "";
		}
	});
}());