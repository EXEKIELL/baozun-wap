$(function () {
    $('.del1').prevAll().remove();
    $('.del2').nextAll().remove();
    $('.head2').click(function () {
        $('body').css({
            "overflow-y":"hidden"
        });
        $('.mask').show();
        $('.navBar').css({
           "-webkit-transform": "matrix(+1,0,0,1,0,0)",
            "-moz-transform": "matrix(+1,0,0,1,0,0)",
            "-ms-transform": "matrix(+1,0,0,1,0,0)",
            "-o-transform": "matrix(+1,0,0,1,0,0)",
            "transform": "matrix(+1,0,0,1,0,0)"
        })
    })
    $('.mask').click(function () {
        $('.navBar').css({
            "-webkit-transform": "matrix(+1,0,0,1,-550,0)",
            "-moz-transform": "matrix(+1,0,0,1,-550,0)",
            "-ms-transform": "matrix(+1,0,0,1,-550,0)",
            "-o-transform": "matrix(+1,0,0,1,-550,0)",
            "transform": "matrix(+1,0,0,1,-550,0)"
        })
        $('body').css({
            "overflow-y":"scroll"
        })
        $(this).hide();
    })
    $('.navBar a').click(function () {
        $('.navBar').css({
            "-webkit-transform": "matrix(+1,0,0,1,-550,0)",
            "-moz-transform": "matrix(+1,0,0,1,-550,0)",
            "-ms-transform": "matrix(+1,0,0,1,-550,0)",
            "-o-transform": "matrix(+1,0,0,1,-550,0)",
            "transform": "matrix(+1,0,0,1,-550,0)"
        })
        $('body').css({
            "overflow-y":"scroll"
        });
        $('.mask').hide()
    })
})