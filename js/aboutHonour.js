$(function () {
    //弹窗
    $('.list2 .row .slide>a').click(function () {
        $('.mask').show();
        $(document.body).css({
            "overflow-y":"hidden"
        })
    })
    //关闭弹窗
    $('.fanhui').click(function () {
        $('.mask').hide();
        $(document.body).css({
            "overflow-y":"scroll"
        })
    })
})