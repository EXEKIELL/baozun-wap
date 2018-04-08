$(function () {
    $('.btn-1>div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
    })
    $('.btn-2>div').click(function () {
        $(this).addClass('sel');
        $(this).siblings('div').removeClass('sel');
    })
})