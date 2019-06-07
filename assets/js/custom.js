/**
 * Created by Eleven on 5-6-2019.
 */
let activeTile = -1;
let activeScreen = -1;
// const tileHeading = ["Home", "Projects", "Skills", "About Me"];

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

function appendSlideShow(list) {
    let indicators = '<ol class="carousel-indicators">\n';
    let carouselItems = '';
    for(let i = 0; i < list.length; i++){
        let classList = "";
        if(i === 0) classList = "active";
        indicators += '<li data-target="#carrr" data-slide-to="'+i+'" class="'+ classList+'"></li>\n';
        carouselItems += '<div class="carousel-item h-100 '+classList+'">\n' +
            '        <img src="'+list[i].link+'" alt="...">\n' +
            '        <div class="carousel-caption">\n' +
            '          <h5 class="dark-text">'+list[i].name+'</h5>\n' +
            '          <p class="font-italic text-muted">'+list[i].description+'</p>\n' +
            '        </div>\n' +
            '      </div>\n';
    }
    indicators += '</ol>\n' ;

    const data = '<div class="row">\n' +
        '  <div id="carrr" class="carousel slide col-12" data-ride="carousel">\n' +
        indicators +
        '    <div class="carousel-inner text-center">\n'
            + carouselItems +
        '    </div>\n' +
        '<div class="controls next central"> <i class="material-icons">chevron_right</i> </div>' +
        '<div class="controls prev central"> <i class="material-icons">chevron_left</i> </div>' +
        '  </div>\n' +
        '</div>';

    $(".data-holder").append(data);
    $(".carousel-indicators li").eq(0).click();
    $(".controls.next").on("click", function () {
        $(".carousel").carousel('next');
    });
    $(".controls.prev").on("click", function () {
        $(".carousel").carousel('prev');
    })
}

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

function appendSkillsInfo(list) {
    const content = '<div class="content"></div>';
    $(".data-holder").append(content);
    let html = '<div>';
    for(let i = 0; i < list[0].data.length; i++){
        let classList = "";
        if(i !== 0) classList = "mt-5";
        html += '<div class="dark-text '+classList+'">' +
            '<h3 class="skill-title font-italic">'+ list[0].data[i].title+'<div class="skill-bar"></div></h3>';

        for( let j = 0; j < list[0].data[i].data.length; j++){
            let classList2 = "";
            if(j === 0) classList2 = "mt-4";
            html+= '<h5 class="text-muted mt-2 '+classList2+'">'+ list[0].data[i].data[j].val +'</h5>';
        }
        html+= '</div>';
    }
    html+= '</div>';
    $(".content").append(html);
}

// use h3 and h4 for project details

function appendProjects(index) {
    const heads = ['UI/UX', 'WEB'];
    let projects;
    if(index === 0) projects = [
        {name : "Osler Health Network - Patient App", link: "assets/images/projects/ui-ux/osler-health.png", description: "DevsLane"},
        {name : "Confession Messenger", link: "assets/images/projects/ui-ux/confession.png", description: "DevsLane"},
        {name : "DevsLane Website", link: "assets/images/projects/ui-ux/devslane-website.svg", description: "DevsLane"},
        {name : "Swirnow - Dashboard", link: "assets/images/projects/ui-ux/swirnow-dashboard.png", description: "DevsLane"},
        {name : "Swirnow - Sites", link: "assets/images/projects/ui-ux/swirnow-guest.svg", description: "DevsLane"},
        {name : "Vaetas - Shopify", link: "assets/images/projects/ui-ux/vaetas-shopify.png", description: "DevsLane"},
        {name : "Butterfly - Dashboard", link: "assets/images/projects/ui-ux/butterfly.png", description: "DevsLane"},
        {name : "RaRa - Web Dashboard", link: "assets/images/projects/ui-ux/rara-dashboard.png", description: "DevsLane"}
    ];
    else if(index === 1) projects = [
        {name : "DevsLane Website", link: "assets/images/projects/web/devslane.svg", description: "DevsLane", href: "https://devslane.com/"},
        {name : "StayDuvet", link: "assets/images/projects/web/stay-duvet.png", description: "DevsLane", href: "https://stayduvet.com/"},
        {name : "PulseLabs", link: "assets/images/projects/web/pulselabs.png", description: "DevsLane", href: "https://dev.pulselabs.ai/"}
    ];
    appendDataHolder(heads, index);
    appendSlideShow(projects);
}
function appendSkills(index) {
    const heads = ['UX', 'UI', 'WEB'];
    let skills;
    if(index === 0) skills = [{
        data: [
            {
                title: 'Skills',
                data: [
                    {val : "UX Research"},
                    {val : "Ongoing Trends"},
                    {val : "Laws of UX"},
                ]
            },
            {
                title: 'Tools',
                data: [
                    {val : "Adobe XD"},
                    {val : "Adobe Illustrator"},
                    {val : "Invision Studio"},
                    {val : "Figma"},
                    {val : "UX Pin"},
                ]
            }
        ]
    }];
    else if(index === 1) skills = [{
        data: [
            {
                title: 'Skills',
                data: [
                    {val : "Vector Manipulation"},
                    {val : "Material Design"},
                    {val : "Flat Designs"},
                    {val : "Typography"},
                    {val : "Motion Graphics"},
                ]
            },
            {
                title: 'Tools',
                data: [
                    {val : "Adobe Illustrator"},
                    {val : "Adobe XD"},
                    {val : "Adobe Photoshop"},
                    {val : "Adobe After Effects"},
                ]
            }
        ]
    }];
    else if(index === 2) skills = [{
        data: [
            {
                title: 'Mastered',
                data: [
                    {val : "jQuery"},
                    {val : "CSS3, SCSS"},
                    {val : "HTML5 & Responsive Designs"},
                ]
            },
            {
                title: 'Playing with...',
                data: [
                    {val : "Vanilla Javascript"},
                    {val : "VueJS & Angular 4"},
                ]
            },
            {
                title: 'Backend related',
                data: [
                    {val : "PHP/Laravel"},
                    {val : "Android Using Java"},
                    {val : "Cordova"},
                ]
            },
            {
                title: 'and...',
                data: [
                    {val : "Knowledge of Github"},
                ]
            }
        ]
    }];
    appendDataHolder(heads, index);
    appendSkillsInfo(skills);
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
    let clicked = true;
    $(".round-button").on("click", function () {
        if(clicked){
            clicked = false;
            activeScreen = 2;
            $(this).addClass("animated fadeOut");
            $(".quarter").eq(activeTile).find(".tile").addClass("animated fadeOutUp");
            const data = appendCircles();
            setTimeout( function () {
                $(".quarter").eq(activeTile).append(data).find(".tile").addClass("d-none");
                onCircleClick();
            }, 1200);
        }

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