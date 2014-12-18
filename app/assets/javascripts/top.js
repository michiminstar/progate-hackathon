$(function(){
  $('#clock').countdown('2015/01/01 00:00:00', function(event) {
  var $this = $(this).html(event.strftime(''
  + '<span>%-w</span> week%!w '
  + '<span>%-d</span> day%!d '
  + '<span>%H</span> hr '
  + '<span>%M</span> min '
  + '<span>%S</span> sec'));
 });
});
