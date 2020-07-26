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

// $(document).ready(function() {
//     var i = 0; //get from storrage
//     $(".mainTabs a").eq(i).addClass('active');
// });

$(document).ready(function() {

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

    });
    $(".editBlock a").click(function() {
        $(".editBlock").hide();

    });

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

// function on() {
//     document.getElementById("overlay").style.display = "block";
// }

// function off() {
//     document.getElementById("overlay").style.display = "none";
// }

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
        interval: 1000
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
// var a = document.getElementByTagName('a').item(0);
// $(a).on('keyup', function(evt) {
//     console.log(evt);
//     if (evt.keycode === 13) {

//         alert('search?');
//     }
// });