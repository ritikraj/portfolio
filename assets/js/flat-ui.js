/**
 * Created by Eleven on 03-01-2019.
 */


var viewportWidth, viewportHeight;
var visibleTiles;
var b, t;
var diamondNavigationTimeout = [];
var flatSlider;
var autoplay = [];
var scrollFromTop = 0;

function viewport() {
    viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
}
function calculateVisible() {
    if(viewportWidth < 576) visibleTiles = 1;                              
    else if(viewportWidth >=576 && viewportWidth < 768) visibleTiles = 2;
    else if(viewportWidth >=768 && viewportWidth < 992) visibleTiles = 4;
    else if(viewportWidth > 992) visibleTiles = 6;
}
function checkControls() {
    $(".slider-prev").addClass("d-none");
    $(".slider-next").each(function () {
            var $children = 
                $(this)
                    .closest(".flat-slider")
                    .find(".flat-slider-content")
                    .children()
                    .length;
            if($children <= visibleTiles) 
                $(this).addClass("d-none");
        })
}
function hideIcon($this) {
    $this.addClass("d-none");
}
function showIcon($this) {
    $this.removeClass("d-none");
}
function calculateNext($this,$count,$totalChildren) {
    if($count <= $totalChildren - visibleTiles)
        showIcon($this);
    else hideIcon($this);
}
function calculatePrev($this,$count,$totalChildren) {
    if($count > 1 && $totalChildren !== 1 && ($count <= $totalChildren))
        showIcon($this);
    else hideIcon($this);
}
function findBgTxt($this) {
    b = $this
        .closest("main")
        .css("background-color");
    t = $this
        .closest(".flat-slider")
        .find(".flat-slider-item:not(.active) .icon")
        .css("background-color");
}
function setActive($this, $currentIndex) {
    findBgTxt($this);
    $this
        .find(".flat-slider-item")
        .eq($currentIndex)
        .addClass("active")
        .find(".icon")
        .css({ 
            backgroundColor: b, 
            color: t, 
            borderColor: t 
        })
        .end()
        .find(".desc")
        .fadeOut();
}
function setThisActive($this) {
    findBgTxt($this);
    $this
        .siblings(".flat-slider-item.active")
        .removeClass("active")
        .find(".icon")
        .css({
            backgroundColor: t,
            color: b,
            borderColor: t
        })
        .end()
        .find(".desc")
        .fadeIn()
        .end()
        .end()
        .addClass("active")
        .find(".icon")
        .css({
            backgroundColor: b,
            color: t,
            borderColor: t
        })
        .end()
        .find(".desc")
        .fadeOut();
}
function showSliderData(sIndex) {
    var sliderIndex = "slider"+sIndex;
    $(".flat-slider")
        .eq(sIndex)
        .find(".title-body .title")
        .eq(0)
        .html(window[sliderIndex][0].title)
        .end()
        .end()
        .end()
        .eq(sIndex)
        .find(".title-body .body")
        .eq(0)
        .html(window[sliderIndex][0].body);
}
function showActiveData($this,ci) {
    var s = $this.closest(".flat-slider");
    var i,sc;
    for(i=0; i<flatSlider.length; i++){
        sc = "slider-"+i;
        if(s.hasClass(sc)){ s=i; break; }
    }
    var sliderIndex = "slider"+s;
    $(".flat-slider.slider-"+s)
        .find(".title-body")
        .fadeOut(function () {
            $(this)
                .find(".title")
                .html(window[sliderIndex][ci].title)
                .end()
                .find(".body")
                .html(window[sliderIndex][ci].body)
        })
        .fadeIn();
}

function setDiamondActive($this, activeDiamond, activeDiamondBorderColor, previousIndex, currentIndex, i) {
    $this
        .find(".active-diamond")
        .remove();
    $this
        .append(activeDiamond)
        .find(".active-diamond")
        .css({ 
            border:"2px solid "+activeDiamondBorderColor, 
            top: previousIndex*40+"px" 
        })
        .animate({ 
            top: currentIndex*40+"px" 
        }, 300);
    if(autoplay[i]) 
        diamondNavigationTimeout[i] = setTimeout(function () { 
            nt($this); 
            }, 3000
        );

}
function showDiamondData($this, diamondVariable, currentIndex){
    $this
        .find(".diamond-data-title")
        .html(window[diamondVariable][currentIndex].title)
        .end()
        .find(".diamond-data-body")
        .html(window[diamondVariable][currentIndex].body);
}
function nt($this) {
    var next = $this.find("li.active").next("li");
    var first = $this.find("li").eq(0);
    if(next.length !== 0) next.click();
    else first.click();
}
function pauseDiamondNavigation(i) {
    clearTimeout(diamondNavigationTimeout[i]);
    autoplay[i] = false;
}
function playDiamondNavigation(i, es) {                                                                                       
    diamondNavigationTimeout[i] = setTimeout(function () {
        nt(es);
    }, 3000);
    autoplay[i] = true;
}

function swipeLeft(el) {
    el.find(".slider-next").click();
}
function swipeRight(el) {
    el.find(".slider-prev").click();
}
$(document).ready(function () {
    viewport();
    calculateVisible();
    checkControls();
    
    var sliderShift;
    flatSlider = $(".flat-slider");
    $(".flat-slider-item")
        .addClass("col-12 col-lg-2 col-md-3 col-sm-6");
    var sCounter=0;
    flatSlider.each(function () {
        $(this).newSwipe(false, true, false);
        var count=1;
        var totalChildren = $(this)
            .find(".flat-slider-content")
            .children()
            .length;
        setActive(
            $(this),
            0
        );
        $(this)
            .addClass("slider-"+sCounter)
            .find(".slider-next")
            .on("click", function () {
               if(count <= totalChildren - visibleTiles){
                   sliderShift = count * 100;
                   $(this)
                       .closest(".flat-slider")
                       .find(".flat-slider-item")
                       .animate({
                           left: '-'+parseInt(sliderShift/visibleTiles)+'%'
                       });
                   if(visibleTiles === 1) 
                       $(this)
                           .closest(".flat-slider")
                           .find(".item-group")
                           .eq(count)
                           .click();
                   count++;
                   calculateNext(
                       $(this),
                       count,
                       totalChildren
                   );
                   calculatePrev(
                       $(this).closest(".flat-slider").find(".slider-prev"),
                       count,
                       totalChildren
                   );
               }
            })
            .end()
            .find(".slider-prev")
            .on("click", function () {
                if(count > 1 && totalChildren !== 1 && (count <= totalChildren) ){
                    count--;
                    sliderShift = 100;
                    $(this)
                        .closest(".flat-slider")
                        .find(".flat-slider-item")
                        .animate({
                            left: '+='+sliderShift/visibleTiles+'%'
                        });
                    if(visibleTiles === 1) 
                        $(this)
                            .closest(".flat-slider")
                            .find(".flat-slider-item")
                            .eq(count-1)
                            .click();
                    calculatePrev(
                        $(this),
                        count,
                        totalChildren
                    );
                    calculateNext(
                        $(this).closest(".flat-slider").find(".slider-next"),
                        count,
                        totalChildren
                    );
                }
            })
            .end()
            .find(".flat-slider-item")
            .on("click", function () {
                if(!$(this).hasClass("active")){
                    setThisActive($(this));
                    showActiveData(
                        $(this),
                        $(this).index()
                    );
                }
            });
        showSliderData(sCounter);
        sCounter++;
    });
    
    // Side Menu
    var tempScroll;
    $(".side-menu").addClass("d-none");
    $(".side-menu-overlay")
        .fadeOut()
        .on("click", function () {
            $(".side-menu")
                .removeClass("slide-in")
                .addClass("slide-out");
            $(".side-menu-overlay").fadeOut();
            $("body").removeClass("position-fixed");
            $(window).scrollTop(tempScroll);
        });
    $(".close-side-menu")
        .on("click", function () { 
            $(".side-menu-overlay").click(); 
        });
    $(".menu-collapse")
        .on("click", function () {
            tempScroll = scrollFromTop;
            $(".side-menu")
                .removeClass("slide-out d-none")
                .addClass("slide-in");
        $(".side-menu-overlay")
            .fadeIn(function () {
                $("body").addClass("position-fixed");
        });
    });
    
    //diamond navigation
    var heights = [];
    $(".diamond-nav").each(function (i) {
        var diamondVariable = "diamond"+i;
        var temp;
        for(var j=0; j< window[diamondVariable].length; j++){
            temp = $(this)
                .closest(".diamond-navigation")
                .find(".diamond-data");
            temp
                .find(".diamond-data-body")
                .html(window[diamondVariable][j].body);
            heights[j] = temp.height();
        }
        temp
            .find(".diamond-data-body")
            .html("");
        var mh = Math.max.apply(null,heights)+100;
        temp.css("min-height", mh+"px");
        var activeDiamondBorderColor = $(this).closest("main").css("color");
        var activeDiamondBackgroundColor = $(this).closest("main").css("background-color");
        var activeDiamond = "<span class='active-diamond' style='background-color: "+activeDiamondBackgroundColor+"'></span>";
        autoplay[i] = true;
        setDiamondActive(
            $(this), 
            activeDiamond, 
            activeDiamondBorderColor, 
            0, 
            0, 
            i
        );
        showDiamondData(
            $(this).closest(".diamond-navigation"), 
            diamondVariable, 
            0
        );
        $(this)
            .css({
                borderLeftColor: activeDiamondBorderColor
            })
            .find("li")
            .on("click", function () {
                clearTimeout(diamondNavigationTimeout[i]);
                var previousIndex = $(this)
                    .closest("ul")
                    .find("li.active")
                    .index();
                $(this)
                    .siblings("li")
                    .removeClass("active")
                    .end()
                    .addClass("active");
                var currentIndex = $(this).index();
                setDiamondActive(
                    $(this).closest("ul"), 
                    activeDiamond, 
                    activeDiamondBorderColor,
                    previousIndex,
                    currentIndex, 
                    i
                );
                showDiamondData(
                    $(this).closest(".diamond-navigation"), 
                    diamondVariable,
                    currentIndex
                );
                return false;
            })
            .closest(".diamond-navigation")
            .on("mouseover", function () { 
                pauseDiamondNavigation(i); 
            })
            .on("mouseout", function () { 
                playDiamondNavigation(
                    i, 
                    $(this).find("ul.diamond-nav")
                ); 
            });
    });

});

$(window).resize(function () {
    viewport();
    calculateVisible();
});
$(window).scroll(function () {
    scrollFromTop = $(window).scrollTop();
});