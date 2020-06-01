$(document).ready(function () {
  $("#navButton").click(() => {
    $("#navigation").removeClass("navClosed");
    $("#navigation").addClass("navOpen");
  });
  $("#close").click(() => {
    $("#navigation").removeClass("navOpen");
    $("#navigation").addClass("navClosed");
  });
});
