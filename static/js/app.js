$(window).on("scroll", () => {
  const scrollTop = $(this).scrollTop();

  if (scrollTop > 10) {
    $(".header").addClass("scroll");
    $("#logo").addClass("scroll-logo");
    $("#logo").removeClass("default-logo");
  } else {
    $(".header").removeClass("scroll");
    $("#logo").removeClass("scroll-logo");
    $("#logo").addClass("default-logo");
  }
});
