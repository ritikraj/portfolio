/**
 * Created by Eleven on 03-01-2019.
 */

function letJqueryWork(){
    setTimeout( function () {
        $(".preloader").remove();
        $(".ball").animate({
            top: "100px",
            left : "100px",
            minHeight : "70px",
            minWidth : "70px",

        },600);
    }, 500, );
}

function expand() {
    var ball = $(".ball")[0];

    anime({
        targets : ball,
        minHeight : "300vh",
        minWidth : "300vh",
        duration: 800,
        easing : "easeInOutBack",
        complete : function (a) {
            anime.remove(ball);
            letJqueryWork();
        }
    });
}

function bounce () {
    var tl = anime.timeline({
        targets: $(".ball")[0],
        duration: 400,
        easing: 'easeInCubic',
        loop: true
    });

    tl
        .add({
            marginTop: "50vh"
        })
        .add({
            easing: 'easeOutCubic',
            marginTop: 0
        });
}

$(document).ready(function () {
});

$(window).on("load", function() {
    // var ball = '<div class="red ball fixed-center"></div>';
    // $("body").append(ball);
    // bounce();
    // setTimeout(function () {
    //     anime.remove($(".ball")[0]);
    //     expand();
    // }, 1500);
});
