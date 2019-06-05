/**
 * Created by Eleven on 27-03-2019.
 */

var sliderTitles = ["learning", "growth", "innovation", "evolution", "great relationships", "new horizons"];
var colors = ["orange", "peteriver", "alizarin", "amethyst", "wetasphalt", "turquoise"];
var navColors = ["midnightblue", "midnightblue", "greensea", "carrot", "wisteria", "pumpkin", "bg-transparent"];
var darkColors = ["carrot", "belizehole", "pomegranate", "wisteria", "midnightblue", "greensea"];
var easing = ["cubicBezier(.5, .05, .1, .3)", "easeOutCubic", "cubicBezier(.85,.25,.56,.93)", "cubicBezier(.2,.93,.36,.92)", "easeOutSine", "easeOutExpo", "easeOutCirc", "easeOutBack"];
var alignment = ["right-0", "right-0", "right-0", "left-0", "right-0", "left-0"];
// var directions = ["top", "bottom", "left", "right"];
// var graphicAlignment = ["right-0", "right-0", "left-0", "left-0", "right-0", "left-0"];
var path1 = "../../../assets/images/graphics/about-aboutus/faded-bg/Path1.svg";
var path2 = "../../../assets/images/graphics/about-aboutus/faded-bg/Path2.svg";
var path3 = "../../../assets/images/graphics/about-aboutus/faded-bg/Path3.svg";
var pathArray = [path1,path1,path2,path3,path1,path3];
var sliderImagePath = "../../../assets/images/graphics/about-aboutus/slider-img/";
var sliderTimeout = 6000;
var aboutSliderTimeoutFunction;
var index = 0;
var enabler = true;
var screenOffsetTop = [];

function changeData() {

    /* for the two navbars */
    $(".side-menu")
        .removeClass(colors)
        .addClass(colors[index])
        .css({
            transition: "all 400ms ease-out"
        });
    if(scrollFromTop < viewportHeight - 70){
        $("nav")
            .removeClass(colors)
            .removeClass(darkColors)
            .removeClass(navColors)
            .addClass(colors[index]);
    }
    /* /for the two navbars */

    var sm = "";
    if(viewportWidth < 768) sm = "-sm";
    var ss = $(".slider-screen");
    ss
        .removeClass(colors)
        .addClass(colors[index])
        .find(".slider-screen-heading")
        .removeClass(alignment)
        .addClass(alignment[index])
        .find("p")
        .eq(1)
        .text(sliderTitles[index])
        .end()
        .end()
        .end()
        .find(".faded")
        .removeClass(alignment)
        .addClass(alignment[index])
        .attr("src", pathArray[index])
        .end()
        .end()
        .find(".slider-img")
        // .removeClass(graphicAlignment)
        // .addClass(graphicAlignment[index])
        .removeAttr("src")
        .attr("src", sliderImagePath + parseInt(index + 1)  + sm + ".svg");

    $(".about-slider-indicators ul li.active").removeClass("active");
    $(".about-slider-indicators ul li").eq(index).addClass("active");
}

function isEnable() {
    return enabler === true;

}
function setEnable() {
    enabler = true;
}
function resetEnable() {
    enabler = false;
}

function checkIndex() {
    if(index === colors.length) index = 0;
    if(index === -1) index = colors.length - 1;
    return  index % 2 === 0
}
function animation(target, source){
    var direction, axis;
    if(source === "image"){
        axis = "width";
        if(checkIndex()) {
            direction = "left";
        }
        else {
            direction = "right";
        }
    }
    else if(source === "heading"){
        axis = "height";
        if(checkIndex()) {
            direction = "top";
        }
        else {
            direction = "bottom";
        }
    }
    if(source === "heading")
        target.removeClass(darkColors).removeClass(colors).addClass(darkColors[index]);
    else
        target.removeClass(colors).removeClass(darkColors).addClass(colors[index]);
    var realTarget = target[0];
    var options = {};
    options['targets'] = realTarget;
    options[axis] = '100%';
    options['easing'] = easing[Math.floor(Math.random() * easing.length)];
    options[direction] = 0;
    options['duration'] = 500;
    var animation = anime(options);
    animation.finished.then( function () {
        anime.remove(realTarget);
        changeData();
        options['delay'] = 300;
        options[axis] = 0;
        options[direction] = '100%';
        options['duration'] = 1000;
        animation = anime(options);
        animation.finished.then( function () {
            anime.remove(realTarget);
            var directionCss = {};
            directionCss[direction] = 'auto';
            target.css(directionCss);
            setEnable()
        })
    });
}
function aboutCarouselNext() {
    if(isEnable()){
        resetEnable();
        aboutCarousel();
        index--;
        startAboutCarousel();
    }
}
function aboutCarouselPrev() {
    if(isEnable()){
        resetEnable();
        index-=2;
        aboutCarousel();
        index--;
        startAboutCarousel();
    }
}

function startAboutCarousel(timeout) {
    clearTimeout(aboutSliderTimeoutFunction);
    aboutSliderTimeoutFunction = setTimeout(function () {
        aboutCarousel();
    },timeout);
}


function aboutCarousel(){
    index++;
    animation($(".slider-screen-animation"), "heading");
    animation($(".image-animation"), "image");
    startAboutCarousel(sliderTimeout);
}


function dipHeight() {
    $(".dip").each(function () {
        var el = $(this);
        el.css("height", el.find(".dip-bg").height()+"px")
    });
}

function calculateScrollPositions() {
    $("main.screen").each(function (i) {
        screenOffsetTop[i] = parseInt($(this).offset().top - 80);
    });

}

function setCarouselHeight(){
    var $maxHeight = [];
    var ci = $(".carousel#careers-carousel .carousel-item");
    ci.find("img").removeClass("afterwards").end().css({
        "min-height": "max-content",
        "max-height": "max-content"
    });
    ci.each(function (i) {
        $maxHeight[i] = $(this).height()
    });
    var mh = Math.max.apply(null,$maxHeight)-100;
    ci
        .css({
            "min-height": mh+"px",
            "max-height": mh+"px"
        })
        .find("img")
        .addClass("afterwards");
    $(".carousel#careers-text .carousel-item").css("min-height", "50px");
    if(viewportWidth < 768 ) $(".carousel#careers-text .carousel-item").css("min-height", "100px");
}
function swipeLeft(el) {
    // In swiping
    aboutCarouselNext()
}
function swipeRight(el) {
    // In swiping
    aboutCarouselPrev()
}
$(document).ready(function () {
    $(".slider-screen").newSwipe(false, true, false);
    $(".logo").html("<img class='' src='../../../assets/images/graphics/full-logo-white.svg'>");
    calculateScrollPositions();
    var j;
    for(j =0; j < sliderTitles.length; j++){
        var downloading = new Image();
        if(viewportWidth < 768)
            downloading.src = sliderImagePath + parseInt(j+1) + "-sm.svg";
        else
            downloading.src = sliderImagePath + parseInt(j+1) + ".svg";
    }
    for(j =1; j <= 3; j++){
        var pathImg = new Image();
        pathImg.src = window["path"+j];
    }
    $(".about-slider-next").on("click", function () {
        aboutCarouselNext();
    });
    $(".about-slider-prev").on("click", function () {
        aboutCarouselPrev();
    });
    for(var i = 0; i< sliderTitles.length; i++){
        if(i===0)
            $(".about-slider-indicators").find("ul").append("<li class='active'></li>");
        else
            $(".about-slider-indicators").find("ul").append("<li></li>");
    }

    $(".about-slider-indicators ul li").on("click", function () {
        if(!$(this).hasClass("active") && isEnable()){
            resetEnable();
            var active = $(".about-slider-indicators ul li.active");
            index = $(this).index();
            index--;
            aboutCarousel();
            index--;
            startAboutCarousel();
            active.removeClass("active");
            $(this).addClass("active");
        }
    });
    $(window).keyup(function (e) {
        if(e.keyCode === 37){
            aboutCarouselPrev()
        }
        else if( e.keyCode === 39){
            aboutCarouselNext()
        }
    });

    var cIndex=0;
    $('.carousel#careers-carousel').on('slide.bs.carousel', function (e) {
        cIndex = e.to;
        $(".carousel#careers-text").carousel(cIndex);
        $(".carousel").eq(1).carousel('pause');
    });

    setCarouselHeight();
    dipHeight();
});

$(window).on("load", function() {
    startAboutCarousel(sliderTimeout);
    dipHeight();
    calculateScrollPositions();
    setCarouselHeight();
});
$(window).resize(function () {
    dipHeight();
    calculateScrollPositions();
    setCarouselHeight();
});
$(window).scroll(function () {
    $("nav.navbar")
        .removeClass(colors)
        .removeClass(navColors)
        .removeClass(darkColors );
    if(scrollFromTop > screenOffsetTop[0]) {
        var indexV = 0;
        for (var k = 0; k < screenOffsetTop.length; k++) {
            if (k !== screenOffsetTop.length - 1 && scrollFromTop >= screenOffsetTop[k] && scrollFromTop < screenOffsetTop[k + 1]) {
                indexV = k;
            }
            else if (k === screenOffsetTop.length - 1 && scrollFromTop > $("html").outerHeight() - viewportHeight - 100) {
                indexV = k;
            }
        }
        $("nav").addClass(navColors[indexV]);
    }
    else{
        $("nav").addClass(colors[index]);
    }
});
