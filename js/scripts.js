$(document).ready(function() {
  $(".clickable").click(function() {
    $("#clickshow").toggle();
    $("#clickhide").toggle();
  });
  $(".txtshow").click(function() {
    $("#fade-in").slideUp();
    $("#regularetext").hide();
  });
});
