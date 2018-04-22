jQuery(function ($) {

    $("#left").click('click', function () {

        if ($("#left-menu").hasClass("visable")) {
            $("#left-menu").hide(500).removeClass("visable");
            $(this).removeClass("expanded").addClass("collapsed");
        }
        else {
            $("#left-menu").show(500).addClass("visable");
            $(this).removeClass("collapsed").addClass("expanded");
        }
    });

    $("#search-icon").hover(function () {
        $("#search_field").removeClass("search-hide").addClass("search-show");

    })

    $("#top-bar").mouseleave(function () {
        if ($("#search_field").hasClass("search-show")) $("#search_field").removeClass("search-show").addClass("search-hide");

    })


});