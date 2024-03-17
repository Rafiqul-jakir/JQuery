$(document).ready(function () {
  $(".acc-heading").click(function (e) {
    e.preventDefault();
    let hascls = $(this).hasClass("active");
    let activeAttr = $(this).attr("acc-heading");

    if (hascls) {
      $(this).removeClass("active");
      $("[acc-content =" + activeAttr + "]").slideUp();
    } else {
      $(".acc-content").slideUp();
      $(".acc-heading").removeClass("active");
      $(this).addClass("active");
      $("[acc-content =" + activeAttr + "]").slideDown();
    }
  });
});
