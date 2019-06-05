/**
 * Created by Eleven on 5-6-2019.
 */
let activeTile = -1;

function appendData() {
    const down = '<div></div>';
}

function appendBackButton() {
    const back = '<div class="back-box">' +
        '<button class="back-button central"> <i class="material-icons">arrow_back</i> </button>' +
        '<div class="back-text"> Back </div>' +
        '</div>';
    $(".quarter")
        .eq(activeTile)
        .append(back)
        .find(".back-box")
        .animate({
            opacity : 1
        });
    $(".back-box").on("click", function () {
        const removeClassList = "q-active q-active-"+parseInt(activeTile + 1);
        const addClassList = "q-inactive q-inactive-"+parseInt(activeTile + 1);
        $('.quarter')
            .eq(activeTile)
            .removeClass(removeClassList)
            .addClass(addClassList)
            .css("cursor", "pointer");
        $(this)
            .animate({
                opacity : 0
            }, function () {
                $(this).remove();
                $('.quarter')
                    .eq(activeTile)
                    .addClass("clickable")
                    .css( { zIndex : 1 } );
        })
    });
}
function appendCurvedUnderline() {
    const underline = '<div class="underline"> <img src="assets/images/curved.svg"></div>';
    $(".tile-heading").each( function () {
        $(this).append(underline);
    });
}

function onTileClick () {
    $(".quarter")
        .on("click", function (e) {
            if($(this).hasClass("clickable")){
                activeTile = $(this).index();
                const removeClassList = "clickable q-inactive q-inactive-"+parseInt(activeTile + 1);
                const addClassList = "q-active q-active-"+parseInt(activeTile + 1);
                $(this)
                    .css({
                        cursor : "default",
                        zIndex: 2
                    })
                    .removeClass(removeClassList)
                    .addClass(addClassList);
                appendBackButton();
                appendData();
            }
        });
}

$(document).ready( function () {
    appendCurvedUnderline();
    onTileClick();
});