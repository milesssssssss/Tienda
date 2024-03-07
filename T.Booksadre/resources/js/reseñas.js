$(document).ready(function () {
    $(".dropdown-submenu a.dropdown-toggle").on("click", function (e) {
      $(this).next("ul").toggle();
      e.stopPropagation();
      e.preventDefault();
    });
  });