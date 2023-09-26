$(document).ready(function () {
  $("#toggleSkills").click(function () {
    $(".skills-list").toggleClass("open");
  });
});
$(document).ready(function () {
  $("#port").click(function () {
    $(".education-container").toggleClass("open");
    $(".skills-list").toggleClass("open");
    window.location.href = "#portfolio";
  });
});
$(document).ready(function () {
  $("#toggleEducation").click(function () {
    $(".education-container").toggleClass("open");
  });
});
