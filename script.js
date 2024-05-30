$(document).ready(function() {


    $("nav ul li a").click(function(event) {
        event.preventDefault();
        var targetID = $(this).attr("href").substring(1);
        $("section").removeClass("active");
        $("#" + targetID).addClass("active");
    });

    $(".centered-image").click(function() {
        $("section").removeClass("active");
        $("#info").addClass("active");
    });

    $("#toggleEducation").click(function() {
        var educationDiv = $("#education");
        if (educationDiv.is(":visible")) {
            educationDiv.slideUp();
            $(this).text("SHOW MORE");
        } else {
            educationDiv.slideDown();
            $(this).text("SHOW LESS");
        }
    });
});
