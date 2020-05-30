$(document).ready(function () {
  $("#navButton").click(() => {
    $("#navigation").addClass("navOpen");
  });
  $("#close").click(() => {
    $("#navigation").removeClass("navOpen");
  });
});
