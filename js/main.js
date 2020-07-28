$(document).ready(function() {
    $(".close").hide();
    $(".menu").hide();
    $(".hamburger").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".hamburger").hide();
            $(".close").show();
        });
    });

    $(".close").click(function() {
        $(".menu").slideToggle("slow", function() {
            $(".close").hide();
            $(".hamburger").show();
        });
    });

});


$(document).ready(function() {

    $("#imageViewerContainer img").attr("usemap", "#image-map");
    // $("#imageViewerContainer img").attr("left", "0px");
    //$("#imageViewerContainer img").attr("position", "relative");
    $("#imageViewerContainer img").css("position", "relative");
    $("#imageViewerContainer img").css("left", '0px;!important');

    $("a.test").click(function() {
        $("#page1").hide();
        $("#page2").show();
        $("#page3").hide();
        $("#page4").hide();
        $("#page5").hide();
        $("#page6").hide();
    });

    $("a.pageClose").click(function() {
        $("#page1").show();
        $("#page2").hide();
        $("#page3").hide();
        $("#page4").hide();
        $("#page5").hide();
        $("#page6").hide();
    });

    $("a.menu1").click(function() {
        $("#page3").show();
        $("#page1").hide();
        $("#page2").hide();
        $("#page4").hide();
        $("#page5").hide();
        $("#page6").hide();
    });


    $("a.adminClose").click(function() {
        $("#page4").show();
        $("#page1").hide();
        $("#page2").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();
    });

    $("ul.page2Menu li a").click(function() {
        $("#page4").show();
        $("#page1").hide();
        $("#page2").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();
    });

    $("a.backButton").click(function() {
        $("#page2").show();
        $("#page1").hide();
        $("#page4").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();
    });

    $("a.int").click(function() {
        $("#page5").show();
        $("#page1").hide();
        $("#page4").hide();
        $("#page3").hide();
        $("#page2").hide();
        $("#page6").hide();
    });

    $("header h1 a").click(function() {

        $("#page1").show();
        $("#page2").hide();
        $("#page4").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();

    });
    $("ul.List li a").click(function() {

        $("#page4").show();
        $("#page1").hide();
        $("#page2").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();

    });
    $("ul.cloud li a").click(function() {

        $("#page4").show();
        $("#page1").hide();
        $("#page2").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();

    });

    $(".notificationBlock ul li").click(function() {

        $("#page4").hide();
        $("#page1").hide();
        $("#page2").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").show();
        $('#overlay').toggle();
        $('body').css('overflow', '');
        $('.notificationBlock').hide();


    });



    $(".edit").click(function() {
        $(".editBlock").show();
        $(".exportBlock").hide();

    });
    $(".editBlock a").click(function() {
        $(".editBlock").hide();

    });

    $("a.yes").click(function() {
        $("a.edit").hide();
        $("a.reset").show();

    });
    $("a.save").click(function() {
        $("a.publish").show();
        $("a.save").hide();
    });


    $("a.publish").click(function() {
        $(".publishBlock").show();
        $(".editBlock").hide();
        $(".exportBlock").hide();
        $('#overlay').toggle();
        $('body').css('overflow', 'hidden');
    });

    $(".publishBlock a").click(function() {
        $("#page2").show();
        $("#page1").hide();
        $("#page4").hide();
        $("#page3").hide();
        $("#page5").hide();
        $("#page6").hide();
        $(".publishBlock").hide();
        $(".publish").hide();
        $(".reset").hide();
        $("a.save").show();
        $("a.edit").show();

        $('#overlay').toggle();
        $('body').css('overflow', 'visible');
    });

    $(".export").click(function() {
        $(".exportBlock").toggle();
        $(".editBlock").hide();
    });

    $("p.new a").click(function() {
        $("ul.approveBlock").toggle();
        $("p.new a").toggleClass("active");

    });
    // $("ul.approveBlock li a").click(function() {
    //     $("ul.approveBlock").hide();

    // });




    $("a.menuList1").click(function() {
        $("#contentBlock1").show();
        $("#contentBlock2").hide();
    });

    $("a.menuList2").click(function() {
        //alert('hi');
        $("#contentBlock1").hide();
        $("#contentBlock2").show();

    });

    $("a.notification").click(function() {
        $(".notificationBlock").toggle();
        $('#overlay').toggle();
        $('body').css('overflow', 'hidden');
    });



});

function tabs(id) {
    $('.tabs').hide();
    $('#' + id).show();
}

function tabHover(id, obj) {
    $(obj).closest('.mainTabs').find('.active').removeClass('active');
    $('.tabs').hide();
    $('#' + id).show();
    $(obj).addClass('active');
}



$(document).ready(function() {
    // Activate Carousel
    $("#myCarousel").carousel({
        interval: 3000
    });

    // Enable Carousel Indicators
    $(".item1").click(function() {
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function() {
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function() {
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function() {
        $("#myCarousel").carousel(3);
    });

});


$(document).ready(function(e) {
    $('.search-panel .dropdown-menu').find('a').click(function(e) {
        e.preventDefault();
        var param = $(this).attr("href").replace("#", "");
        var concept = $(this).text();
        $('.search-panel span#search_concept').text(concept);
        $('.input-group #search_param').val(param);
    });

});

$(document).on('keydown', function(event) {
    if (event.key == "Escape") {
        $('#overlay').toggle();
        $('body').css('overflow', '');
        $('.notificationBlock').hide();
    }
});