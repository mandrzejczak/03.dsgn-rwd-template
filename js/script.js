var showButton = document.getElementById('open-menu');
var navigation = document.getElementById('page-navigation');
var background = document.getElementById('background-click');

function showMenu () {

	if(navigation.className==="closed") {
		navigation.className="";
		background.className="";
	}
	else {
		navigation.className="closed";
		background.className="closed";
	}

}

showButton.addEventListener("click", showMenu);
background.addEventListener("click", showMenu);
navigation.addEventListener("click", showMenu);