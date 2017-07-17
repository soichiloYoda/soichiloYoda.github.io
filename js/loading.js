  $(function() {
    var h = $(window).height();
    $('#contents').css('display','none');
    $('#loader-bg ,#loader').height(h).css('display','flex');
    $('#loader-bg ,#loader').height(h).css('align-items','center');
    $('#loader-bg ,#loader').height(h).css('justify-content','center');
  });
  $(window).load(function () {
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
    $('#contents').css('display', 'block');
  });
  $(function(){
    setTimeout('stopload()',5000);
  });
  function stopload(){
    $('#contents').css('display','block');
    $('#loader-bg').delay(900).fadeOut(800);
    $('#loader').delay(600).fadeOut(300);
  }
