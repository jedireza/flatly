//globally when ready
$(document).ready(function() {
  //active tabs and navigation
  $('.nav [href="'+ window.location.pathname +'"]').closest('li').toggleClass('active');
});