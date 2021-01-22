(function ($) {
  //
  // Header and mobile menu
  //

  const $headerBurger = $(".header__burger"),
      $mobileMenuCover = $(".cover");

  function toggleMobileMenu() {
    $("body").toggleClass("overflow-hidden");
    $(".header__burger").toggleClass("btn--cross");
    $(".sidebar").fadeToggle(280);
    $mobileMenuCover.fadeToggle(280);
  }

  $headerBurger.on("click", toggleMobileMenu);
  $(".header__sidebar-cross").on("click", toggleMobileMenu);
  $mobileMenuCover.on("click", toggleMobileMenu);


  $('.btn--accordion').click(function(j) {
    var dropDown = $(this).closest('.accordion').find('.accordion__back');

    dropDown.stop(false, true).slideToggle();

    dropDown.stop(false, true).parents(".accordion").toggleClass("accordion--open")

    j.preventDefault();
  });


  $(".del_tag").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".file_tag");
    parent.remove();
  });

  $(".del_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".message_row");
    parent.remove();
  });

})(jQuery);

