$(function(){
		// window_load();
		// window.onresize = window_load;
		// function window_load() {
		// }
		var sW = window.innerWidth;
		var sH = window.innerHeight;
		aspectRatio = sW / sH;
		if(aspectRatio >= 1){
			//横長画像の場合 divのheightに数値を合わせる
			$('#music img').css('width','100%');
			$('#photo img').css('width','100%');
			$('#web img').css('width','100%');
		}else{
			//縦長画像の場合 divのwidthに数値を合わせる
			$('#music img').css('height','100%');
			$('#photo img').css('height','100%');
			$('#web img').css('height','100%');
		}
});
