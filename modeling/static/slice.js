$(window).load(function(){
	// 設定 X 及 Y 軸要切成幾塊
	var puzzleX = 64, 
		puzzleY = 64;
 
	var $puzzleImg = $('#puzzleImg'), 
		puzzleImgSrc = $puzzleImg.attr('src');
 
	// 取得 #puzzleImg 圖片的寬高
	var puzzleWidth = parseInt($puzzleImg.css('width'), 10), 
		puzzleHeight = parseInt($puzzleImg.css('height'), 10);
 
	// 設定 #showPuzzle 的寬高
	$('#showPuzzle').css({
		width: puzzleWidth + 1,
		height: puzzleHeight + 1
	});
 
	// 把 #puzzleImg 圖片的寬高除以要切的塊數
	// 這樣能得到每一小塊圖片的寬高
	var picW = Math.round(puzzleWidth / puzzleX), 
		picH = Math.round(puzzleHeight / puzzleY);
 
	// 一一產生 X 及 Y 軸的圖片
for(var i=0;i<puzzleX;i++){
	for(var j=0;j<puzzleY;j++){
		
		// 讓 (3, 2) 及 (8, 6) 區塊都跳過
		//if((i==2 && j==1) || (i==7 && j==5)) continue;
 
		// 計算該區塊的背景圖片位置
		var _posLeft = Math.round(-i * picW)+'px', 
			_posTop = Math.round(-j * picH)+'px';
 
		// 產生一個 span 區塊並指定其寬高、背景圖片及透明度
		// 並加入 hover 事件
		var _span = $('<span />').css({
			position: 'absolute',
			overflow: 'hidden',
			width: picW - 1,
			height: picH - 1,
			left: i * picW + 1,
			top: j * picH + 1,
			backgroundImage: 'url(' + puzzleImgSrc + ')',
			backgroundPosition: _posLeft + ' ' + _posTop,
			opacity: 0.6
		}).click(function(){
			$(this).css('opacity', 1);
			record();
		});
 
		// 把 _span 加到 #showPuzzle 中
		$('#showPuzzle').append(_span);
	}
}
});

function record(){
	
	var mx = x.value - window.pageYOffset;
	var my = y.value;
	
	var px = Math.ceil((mx-8)/16);  //二維陣列的x
	var py = Math.ceil((my-8)/16);  //二維陣列的y
	alert(px+' , '+py);
	
	var n = (py-1) * 64 +px;    //換成一維陣列的哪個位置(從1開始)
	alert(n);
	setTrue(n);
}

function doFirst(){
					//alert("First");
					array = new Array(4096);
					for (i = 0 ; i < 4096 ; i++) {
						array[i] = false;
					}
					locations = "";
					
}

function setTrue(n){
					//alert("this is " + n);					
					array[n-1] = true;
					locations += String(n-1) + ",";
}
				
function calSum(array){
					
	//alert("hi");
					
	var count = 0;
	for (i = 0 ; i < 4096 ; i++) {
		if(array[i]==true){
			count++;
		}
	}
	var loc = document.getElementById("locations");
	loc.setAttribute("value", locations);
	var form1 = document.getElementById("form1");
	form1.submit();				
	
}