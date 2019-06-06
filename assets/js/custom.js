/**
 * Created by Eleven on 5-6-2019.
 */
let activeTile = -1;
let activeScreen = -1;
const tileHeading = ["Home", "Projects", "Skills", "About Me"];

$.fn.fadeOutRemove = function ( callback = function () {} ) {
    $(this)
        .addClass("fading-out")
        .animate({
            opacity : 0,
            transform : "translateY(30px)"
        }, function () {
            $(this).remove();
            callback();
    });
};

function appendDataHolder(heads, index) {
    const holder = '<div class="data-holder"></div>';
    $('body').append(holder).find(".data-holder").animate({ opacity :1 }, 300);
    const header = '<div class="heading">' +
        '<div class="heads">' + heads[index] +
        '</div>' +
        '<div class="close-button central"> <i class="material-icons">close</i></div>' +
        '</div>';
    $(".data-holder").append(header);
    closeAction();
}

function closeAction() {
    $(".close-button").on("click", function () {
        $(".fixed-circle").remove();
        $(".data-holder").fadeOutRemove();
    });
}

// use h3 and h4 for project details

function appendProjects(index) {
    const heads = ['UI/UX', 'WEB'];
    appendDataHolder(heads, index);
}
function appendSkills(index) {
    const heads = ['UX', 'UI', 'WEB'];
    appendDataHolder(heads, index);
}

function appendTileData(index) {
    if( activeTile === 0){

    }
    else if( activeTile === 1){
        appendProjects(index);
    }
    else if( activeTile === 2){
        appendSkills(index);
    }
    else if( activeTile === 3){
    }
}

function onCircleClick() {
    $(".circle").on("click", function (e) {
        const index = $(this.parentNode).index();
        console.log(index);
        var fc = '<div class="fixed-circle"></div>';
        $('body').prepend(fc);
        $(".fixed-circle")
            .css({
                top: e.clientY+"px",
                left: e.clientX+"px",
        });
        setTimeout( function () {
            appendTileData(index);
        }, 800);
    });
}

function appendCircles() {
    let data = null;
    if(activeTile === 0) {
        const t = ['UX', 'WEB'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '<div class="col-lg-3 col-5">' +
                '<div class="central circle">' + t[i] +
                '</div>' +
                '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    else if(activeTile === 1) {
        const t = ['UI/UX', 'WEB'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '<div class="col-lg-3 col-6">' +
                '<div class="central circle">' + t[i] +
                '</div>' +
                '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    else if(activeTile === 2) {
        const t = ['UX', 'UI', 'WEB'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '<div class="col-lg-3 col-6">' +
                '<div class="central circle">' + t[i] +
                '</div>' +
                '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    else if(activeTile === 3) {
        const t = ['UI', 'UX', 'WEB'];
        data ='<article class="container removable">' +
            '<section class="row animated fadeInUp justify-content-center">';
        for( let i = 0; i < t.length; i++){
            data += '<div class="col-lg-3 col-6">' +
                '<div class="central circle">' + t[i] +
                '</div>' +
                '</div>';
        }
        data += '</section>' +
            '</article>';
    }
    return data;
}

function backBoxClick() {
    $(".back-box").on("click", function () {
        const removeClassList = "q-active q-active-"+parseInt(activeTile + 1);
        const addClassList = "q-inactive q-inactive-"+parseInt(activeTile + 1);
        $('.quarter')
            .eq(activeTile)
            .removeClass(removeClassList)
            .addClass(addClassList)
            .css("cursor", "pointer");
        $(".removable").fadeOutRemove();
        $(this).fadeOutRemove( function () {
            $('.quarter')
                .eq(activeTile)
                .addClass("clickable")
                .css( { zIndex : 1 } );
            if( activeScreen === 2) {
                $(".quarter").eq(activeTile).find(".tile").removeClass("animated fadeOutUp d-none").addClass("animated fadeInDown");
            }
        });

    });
}

function onDownArrowClick() {
    $(".round-button").on("click", function () {
        activeScreen = 2;
        $(this).addClass("animated fadeOut");
        $(".quarter").eq(activeTile).find(".tile").addClass("animated fadeOutUp");
        const data = appendCircles();
        setTimeout( function () {
            $(".quarter").eq(activeTile).append(data).find(".tile").addClass("d-none");
            onCircleClick();
        }, 1200);

    });

}

function appendDownButton() {
    const downArrow = '<div class="round-button removable central text-white">' +
        '<i class="material-icons">arrow_downward</i>' +
        '</div>';
    $(".quarter").eq(activeTile).append(downArrow);
    $(".removable").addClass("fading-in");
    onDownArrowClick()
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
    appendDownButton();
    backBoxClick();
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
                activeScreen = 1;
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
            }
        });
}

$(document).ready( function () {
    appendCurvedUnderline();
    onTileClick();
});