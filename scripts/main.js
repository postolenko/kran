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

  // ----------

  $(document).on("click", ".file_tag button", function(e) {
    e.preventDefault();
    parent = $(this).closest(".file_tag");
    parent.remove();
  });

  $(".del_btn").on("click", function(e) {
    e.preventDefault();
    parent = $(this).closest(".message_row");
    parent.remove();
  });

  // ----------

  document.querySelector('#attach-contact-multiple').addEventListener("change", (e) => Array.from(e.target.files).forEach(file => addFile(file.name)));
  function addFile(fileName) {
    let div = document.createElement('div');
    div.className = "file_tag";
    div.innerHTML = fileName;
    let button = document.createElement('button');
    button.className = "del_tag";
    div.append(document.createElement('button'));
    document.querySelector('.files_tags').append(div);
  }

})(jQuery);

