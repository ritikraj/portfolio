/**
 * Created by Eleven on 31-12-2018.
 */
function validateEmail(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);

}
function startup() {
    $(".form-success").fadeOut().addClass(successColorClass).removeClass("bg-danger");
    const $FORM = $(".contact-form");
    $FORM.find("input").val('').end().find('textarea').val('');
}
function sending() {
    $(".form-success").html("Sending...").fadeIn();
}
function successful() {
    $(".form-success").html("We have received your message. Expect to hear back from us shortly!").fadeIn(function () {
        setTimeout(function () {
            $(".form-success").fadeOut( 4000, function () {
                startup()
            });
        },2000)
    });
}

function fail(msg) {
    $(".form-success").removeClass(successColorClass).addClass("bg-danger").html(msg).fadeIn(function () {
        setTimeout(function () {
            $(".form-success").fadeOut( function () {
                $(".form-success").fadeOut().addClass(successColorClass).removeClass("bg-danger");
            });
        },2000)
    });
}

function submit() {
    const $FORM = $(".contact-form");
    var name = $FORM.find("input#name").val();
    var email =$FORM.find("input#email").val();
    var contact = $FORM.find("input#contact").val();
    var message = $FORM.find("textarea#message").val();

    if(name === "" || email === "" || contact === "" || message === "" ){
        fail("Please fill all the details")
    }
    else if(!validateEmail(email)){
        fail("Email is not valid");
    }
    else if(contact.length !== 10){
        fail("Contact Number should be of 10 digits");
    }
    else{
        sending();
        $.ajax({
            url: 'https://bm2yog8tdi.execute-api.us-east-2.amazonaws.com/stage/contact-us',
            type: 'post',
            contentType: 'application/json',
            success: function () {
                successful();
            },
            error: function () {
                fail("Something went wrong");
            },
            data: JSON.stringify({
                "name" :name,
                "email" :email,
                "contact" :contact,
                "message" : message
            })
        })
    }
}

// One Finger touch function
function swipeUp(el){}          // kind of abstract method
function swipeDown(el){}        // kind of abstract method
function swipeRight(el){}       // kind of abstract method
function swipeLeft(el){}        // kind of abstract method
$.fn.newSwipe = function(preventDefaultBehaviour, swipeX, swipeY){
    var startX, startY, distX, distY, touchMove = false;
    preventDefaultBehaviour = (typeof preventDefaultBehaviour !== 'undefined') ?  preventDefaultBehaviour : true;
    swipeX = (typeof swipeX !== 'undefined') ?  swipeX : true;
    swipeY = (typeof swipeY !== 'undefined') ?  swipeY : true;
    $(this)
        .on("touchstart", function (e) {
            startX = 0;
            startY = 0;
            var touchobj = e.changedTouches[0];
            startX = parseInt(touchobj.clientX);
            startY = parseInt(touchobj.clientY);
            if(preventDefaultBehaviour) e.preventDefault();
        })
        .on("touchmove", function (e) {
            var touchobj = e.changedTouches[0];
            distX = parseInt(touchobj.clientX) - startX;
            distY = parseInt(touchobj.clientY) - startY;
            if(preventDefaultBehaviour) e.preventDefault();
            touchMove = true;
        })
        .on("touchend", function (e) {
            if(preventDefaultBehaviour) e.preventDefault();
            var touchobj = e.changedTouches[0];
            if (Math.abs(distX) > Math.abs(distY) && Math.abs(distX) > 30 && touchMove && swipeX) {
                touchMove = false;
                if (distX < 0) {
                    swipeLeft($(this));
                    return "left";
                } else {
                    swipeRight($(this));
                    return "right";
                }
            }
            else if(Math.abs(distY) > Math.abs(distX) && Math.abs(distY) > 30 && touchMove && swipeY){
                touchMove = false;
                if (distY < 0) {
                    swipeUp($(this));
                    return "up";
                } else {
                    swipeDown($(this));
                    return "down";
                }
            }
            else {
                touchMove = false;
                return "none";
            }
        })
};



$(document).ready( function () {
    $(".form-success").fadeOut();
    $("a").each(function () {
        var color = $(this).css('color');
        $(this).hover(function () {
            $(this).css('color', color);
        });
    });
});