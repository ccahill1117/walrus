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
// });

// orca.html jquey

// $(document).ready(function() {
  $("#orca1").click(function() {
    $(".orcafly").slideDown();
    // $("#clickhide").toggle();
  });
  // $(".txtshow").click(function() {
  //   $("#fade-in").fadeIn();
  //   $("#regularetext").hide();
  // });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });

  $("button#greenf").click(function() {
    $("footer").removeClass();
    $("footer").addClass("green-background");
  });

  $("button#yellowf").click(function() {
    $("footer").removeClass();
    $("footer").addClass("yellow-background");
  });

  $("button#redf").click(function() {
    $("footer").removeClass();
    $("footer").addClass("red-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });


});
