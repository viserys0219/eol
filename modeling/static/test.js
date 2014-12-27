function coordinate(e){
	var x1 = document.getElementById("x");
	x1.setAttribute('value',e.screenX);
	//alert(x1.getAttribute('value'));
	var y1 = document.getElementById("y");
	y1.setAttribute('value',e.screenY);
	var form = document.getElementById("form1");
	form.submit();
}
var img = document.getElementById("pic1");
img.addEventListener('click', function(e){
	coordinate(e);
	}, false);