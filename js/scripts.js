// index.html jquery

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#clickshow").toggle();
    $("#clickhide").toggle();
  });
  $(".txtshow").click(function() {
    $("#fade-in").fadeIn();
    $("#regularetext").hide();
  });
});

// orca.html jquey

$(document).ready(function() {
  $("#orca1").click(function() {
    $(".orcafly").fadeIn();
    // $("#clickhide").toggle();
  });
  // $(".txtshow").click(function() {
  //   $("#fade-in").fadeIn();
  //   $("#regularetext").hide();
  // });
});
