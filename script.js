$(document).ready(function() {
    $(".interruttore").click(function() {
        if ($(".description").is(":visible")) {
            $(".description").fadeOut(500, "linear");
        } else {
            $(".description").fadeIn(500, "linear");
        }
    });
});
