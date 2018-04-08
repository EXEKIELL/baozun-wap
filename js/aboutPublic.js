$(function () {
    $('.nav>a').click(function () {
        $(this).addClass('sel');
        $(this).siblings('a').removeClass('sel')
    })
})