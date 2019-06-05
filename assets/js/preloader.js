/**
 * Created by Eleven on 03-01-2019.
 */
$(document).ready(function () {
    $("body").addClass("position-fixed");
});

$(window).on("load", function() {
    setTimeout(function () {
        $("body").removeClass("position-fixed");
        $(".preloading-screen").fadeOut();
    },1000);

});
