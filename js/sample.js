$(function(){
		var sW = window.innerWidth;
		var sH = window.innerHeight;
		aspectRatio = sW / sH;
		if(aspectRatio >= 1){
			//横長画面
			$('#music img').css('width','100%');
			$('#photo img').css('width','100%');
			$('#web img').css('width','100%');
		}else{
			//縦長画面
			$('#music img').css('width','100%');
			$('#photo img').css('width','100%');
			$('#web img').css('width','100%');
		}
});
