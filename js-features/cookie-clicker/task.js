let cookie = document.getElementById('cookie');
let countClick = document.getElementById('clicker_counter');

cookie.onclick = function () {
	countClick +=1;
	document.getElementById('clicker__counter').innerHTML = countClick;
	if(countClick % 2 !== 0) {
		cookie.width = 230;
		cookie.height = 150;
	}else {
		cookie.width = 200;
		cookie.height = 128;
	}
}