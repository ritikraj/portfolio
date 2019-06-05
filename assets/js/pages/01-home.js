/**
 * Created by Eleven on 31-12-2018.
 */
var successColorClass = "bg-success";
var scrollPosHome = [0,0,0,0,0,0,0];
var body1 = "" +
    "<h4>Scale Delivery, engage & Monetize with our Video Streaming solution.</h4>" +
    "<p>With us, you get everything you need to provide uncompromising video streaming experience on web and mobile to audiences of any size. </p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Highly Scalable Live Event Streaming</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>VoD</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Feature rich OTT Platform</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Audio Streaming</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Security</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>QoE/QoS Monitoring</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Advertising and Monetization</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Business Intelligence & Analytics</li>" +
    "</ul>";

var body2 = "" +
    "<p>" +
        "WebRTC is leveraged not just to facilitate peer to peer communication but also " +
        "in reducing bandwidth consumption and latency. By eradicating " +
        "the need to rely on plugins, it becomes easier for developers to simplify " +
        "browser communication and improve user experience. It enables us to " +
        "embed audio/video communication, accelerate data transfer and file " +
        "sharing, secure data transmission. Moreover, it is open source and free and " +
        "is supported by widely used browsers and mobile devices." +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Custom third-party CPaaS integration</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Server-side RTC development</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Video conferencing and chat customization</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Multiscreen deployments</li>" +
    "</ul>";

var body3 = "" +
    "<p>" +
        "We infuse ML, deep learning and AI to build powerful software tools for human centric " +
        "industries like eCommerce, Call centre, " +
        "Enterprises, Healthcare, News/ Media, Finance, Hospitality, Manufacturing, etc. " +
        "to address specific pain points. " +
    "</p>" +
    "<p>" +
        "Inbuilt intelligence significantly help with cost and time savings " +
        "and unmatched precision of analysis from a system that will use " +
        "every new piece of input for continuous self-improvement." +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Big data- and artificial intelligence-driven audience segmentation</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Automated content QC and compliance</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Object detection, recognition, identification & tracking</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Behavior analysis and anomaly detection</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Computer vision-driven medical imaging analysis</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>ML assisted sentiment analysis and content recommendations.</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Fraud detection and prevention</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Supply chain optimization</li>" +
    "</ul>";

var body4 = "" +
    "<p>" +
        "Why not disrupt the classroom experience, stay flexible, reduce " +
        "operational costs, and thus making our EdTech product stand out. " +
        "Relying on deep expertise in complementary fields, DevsLane " +
        "is uniquely positioned to help you enrich your eLearning solution with " +
        "inventive functionality and transform the entire learning experience." +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Video based learning and real time collaboration</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Integrating the latest VR & AR in study curriculum</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Learn on the go with LMS or DLP platforms</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Customization of open-source eLearning solutions</li>" +
    "</ul>";

var body5 = "" +
    "<p>" +
        "DevsLane tailors it’s offerings to your specific place in the advertising value chain: " +
        "AdTech Companies, Publishers, Exchanges, Agencies, Brands. We help you advertise more " +
        "efficiently, automate routine tasks, precisely target ads and predict performance with " +
        "cutting-edge ML technology." +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Ad inventory management</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Yield Optimization</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Demand-Side and Supply-Side platforms</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Server-side Ad Insertion</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Automated buying and selling via RTB or Programmatic Direct</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Data Analytics and Reporting</li>" +
    "</ul>";

var body6 = "" +
    "<p>" +
        "Our data scientists help you get powerful insights by harnessing complex data processing " +
        "operations to make everyday decision-making fact-based and agile. " +
    "</p>" +
    "<p>" +
        "From sourcing to presenting your most sought-after data, we help you uncover " +
        "the insights, enhance data quality and connect data assets on domains like business development, " +
        "marketing, customer experience, human resource management, performance efficiency, and more." +
    "</p>" +
    "<p>" +
        "Be it data storage and services, ETL and data processing, BI and Analytics, we carefully " +
        "choose our stack and expand it in line with the demands of the day to ensure that you benefit " +
        "from the latest Big Data innovations. " +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Strategic Consulting</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Architecture and Design</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Data Governance</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Customer Master Data Management</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Platform based implementation</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Big Data Integration</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Data Mining and Aggregation</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Configuration and Maintenance</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Big Data Analytics</li>" +
    "</ul>";

var body7 = "" +
    "<p>" +
        "As data needs vary from one organization to another, DevsLane pays particular " +
        "attention to business specifics of each customer, whether they belong to retail, " +
        "manufacturing, healthcare, banking or other verticals." +
    "</p>" +
    "<p>" +
        "We transform vast amounts of unstructured data into customizable reports " +
        "enhanced with interactive dashboards across web and mobile. Our solutions are supported by robust, " +
        "scalable backends to withstand high load and ensure 24/7 availability." +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Data Discovery, Warehousing and ETL</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>OLAP and Data Visualization</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Reporting and Interactive Dashboards</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Mobile Business Intelligence</li>" +
    "</ul>";

var body8 = "" +
    "<p>" +
        "Deeper customer insights, better accountability, higher revenues are what we look " +
        "forward to from a perfect marketing strategy. Every product is in some way unique. " +
        "DevsLane combines the latest of marketing technology with meticulous research to help " +
        "clients step up the impact of their marketing campaigns, anticipate customer behaviour, " +
        "and reap bigger rewards." +
    "</p>" +
    "<h5 class='quicksand-bold pt-5 pb-2'>Key Offerings</h5>" +
    "<ul class='flat-list'>" +
        "<li>Video Advertising</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>AI-powered product recommendations</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Marketing automation</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Loyalty/ Reward programs & subscription management</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Business reputation management</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Custom eCommerce platform development</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Webinars and Video conferencing solutions</li>" +
        "<li class='dot-divider snowwhite'></li>" +
        "<li>Second screen and Social TV solutions </li>" +
    "</ul>";

var slider0 = [
    {title:"Online Video", body: body1 },
    {title:"Real-Time Communication", body: body2 },
    {title:"Machine Learning", body: body3 },
    {title:"EdTech and eLearning", body: body4 },
    {title:"AdTech and Digital Advertising", body:  body5 },
    {title:"BigData", body: body6 },
    {title:"Business Intelligence", body: body7 },
    {title:"MarTech", body: body8 }
];


var all = "alizarin belizehole carrot clouds greensea jetblack midnightblue orange peteriver pomegranate pumpkin snowwhite sootblack sunflower turquoise wetasphalt";

var topHeight = 80;
if(viewportWidth < 575.98){
    topHeight = 60;
}
function calculateScrollPos() {
    scrollPosHome[0] = parseInt($(".our-clients").offset().top - topHeight);
    scrollPosHome[1] = parseInt($(".services").offset().top - topHeight);
    scrollPosHome[2] = parseInt($(".let-numbers-talk").offset().top - topHeight);
    scrollPosHome[3] = parseInt($(".business-challenge").offset().top - topHeight);
    scrollPosHome[4] = parseInt($(".case-study").offset().top - topHeight);
    scrollPosHome[5] = parseInt($(".what-clients-say").offset().top - topHeight);
    scrollPosHome[6] = parseInt($(".quick-contact").offset().top - topHeight);
}
$(window).scroll(function () {
    if($(window).scrollTop() < scrollPosHome[0]){
        $(".navbar").removeClass(all).addClass("wetasphalt");
    }
    else if($(window).scrollTop() > scrollPosHome[0] && $(window).scrollTop() < scrollPosHome[1]){
        $(".navbar").removeClass(all).addClass("alizarin");
    }
    else if($(window).scrollTop() > scrollPosHome[1] && $(window).scrollTop() < scrollPosHome[2]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
    else if($(window).scrollTop() > scrollPosHome[2] && $(window).scrollTop() < scrollPosHome[3]){
        $(".navbar").removeClass(all).addClass("peteriver");
    }
    else if($(window).scrollTop() > scrollPosHome[3] && $(window).scrollTop() < scrollPosHome[4]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
    else if($(window).scrollTop() > scrollPosHome[4] && $(window).scrollTop() < scrollPosHome[5]){
        $(".navbar").removeClass(all).addClass("alizarin");
    }
    else if($(window).scrollTop() > scrollPosHome[5] && $(window).scrollTop() < scrollPosHome[6]){
        $(".navbar").removeClass(all).addClass("peteriver");
    }
    else if($(window).scrollTop() > scrollPosHome[6]){
        $(".navbar").removeClass(all).addClass("midnightblue");
    }
});

$(document).ready(function () {
    calculateScrollPos();
    $(".logo").html("<img class='' src='assets/images/graphics/full-logo-white.svg'>");
    var $underline = "<span class='underline midnightblue u-50 h-3'></span>";
    $(".client-name").append($underline);


    // temp

    $("ul.temp-menu li").on("click", function () {
        var $index = $(this).index();
        var $scroll = $("main").eq($index).offset().top;
        $("html, body").animate({
            scrollTop: $scroll+"px"
        });
    });

});

$(window).on("load", function() {
    calculateScrollPos();
});


$(window).resize(function () {
    if(viewportWidth < 575.98){
        topHeight = 60;
    }
    calculateScrollPos();
});

