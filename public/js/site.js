const closeDrawer = function () {
  console.log($(this).closest(".drawer"));
  $(this).closest(".drawer").animate(
    {
      right: "-100%"
    },
    function () {
      $(".drawer").css("display", "none");
    }
  );
  $(".backdrop").animate(
    {
      opacity: 0
    },
    function () {
      $(".backdrop").css("display", "none");
    }
  );
  $("body").removeClass("drawer-open");
};

const openDrawer = function (id) {
  $(".drawer" + id)
    .css("display", "block")
    .animate({
      right: "0%"
    });
  $(".backdrop")
    .css("display", "block")
    .animate({
      opacity: 1
    });
  $("body").addClass("drawer-open");
};

const initialise = function () {
  $("#view-registration").click(function () {
    openDrawer('#drawer-registration');
  });
  $(".drawer-close").click(closeDrawer);
  // $(".tr-click").click(function () {
  //   openDrawer("#drawer-history");
  // });
};

$(function () {
  initialise();
});
