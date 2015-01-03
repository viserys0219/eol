$(window).load(function(){
	// �]�w X �� Y �b�n�����X��
	var puzzleX = 64, 
		puzzleY = 64;
 
	var $puzzleImg = $('#puzzleImg'), 
		puzzleImgSrc = $puzzleImg.attr('src');
 
	// ���o #puzzleImg �Ϥ����e��
	var puzzleWidth = parseInt($puzzleImg.css('width'), 10), 
		puzzleHeight = parseInt($puzzleImg.css('height'), 10);
 
	// �]�w #showPuzzle ���e��
	$('#showPuzzle').css({
		width: puzzleWidth + 1,
		height: puzzleHeight + 1
	});
 
	// �� #puzzleImg �Ϥ����e�����H�n��������
	// �o�˯�o��C�@�p���Ϥ����e��
	var picW = Math.round(puzzleWidth / puzzleX), 
		picH = Math.round(puzzleHeight / puzzleY);
 
	// �@�@���� X �� Y �b���Ϥ�
for(var i=0;i<puzzleX;i++){
	for(var j=0;j<puzzleY;j++){
		
		// �� (3, 2) �� (8, 6) �϶������L
		//if((i==2 && j==1) || (i==7 && j==5)) continue;
 
		// �p��Ӱ϶����I���Ϥ���m
		var _posLeft = Math.round(-i * picW)+'px', 
			_posTop = Math.round(-j * picH)+'px';
 
		// ���ͤ@�� span �϶��ë��w��e���B�I���Ϥ��γz����
		// �å[�J hover �ƥ�
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
 
		// �� _span �[�� #showPuzzle ��
		$('#showPuzzle').append(_span);
	}
}
});

function record(){
	
	var mx = x.value - window.pageYOffset;
	var my = y.value;
	
	var px = Math.ceil((mx-8)/16);  //�G���}�C��x
	var py = Math.ceil((my-8)/16);  //�G���}�C��y
	alert(px+' , '+py);
	
	var n = (py-1) * 64 +px;    //�����@���}�C�����Ӧ�m(�q1�}�l)
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