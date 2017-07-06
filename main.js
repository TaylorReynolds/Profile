function main(){
  $('.hiddenskill1').hide();
  $('.hiddenskill2').hide();
  $('.hiddenskill3').hide();
  $('.hiddenskill4').hide();
  $('.skillsbutton1').on('click', function(){
    $('.hiddenskill1').fadeToggle(400);
    $(this).toggleClass('active');
  });
  $('.skillsbutton2').on('click', function(){
    $('.hiddenskill2').fadeToggle(400);
    $(this).toggleClass('active');
  });
  $('.skillsbutton3').on('click', function(){
    $('.hiddenskill3').fadeToggle(400);
    $(this).toggleClass('active');
  });
  $('.skillsbutton4').on('click', function(){
    $('.hiddenskill4').fadeToggle(400);
    $(this).toggleClass('active');
  });
}
$(document).ready(main);
