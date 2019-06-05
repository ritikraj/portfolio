/**
 * Created by Eleven on 5-6-2019.
 */

$(document).ready( function () {
    $(".quarter").on("click", function (e) {
        var index = parseInt($(this).index() + 1);
        var classList = "q-active q-active-"+index;
        $(this).addClass(classList);
    });
});