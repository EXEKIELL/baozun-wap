$(function () {
    var mySwiper1 = new Swiper('#swiper1',{
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 15,
        freeMode: true
    })
    $('#swiper1 .swiper-slide>a').click(function () {
        $(this).addClass('sel');
        $(this).parent('.swiper-slide').siblings('div').find('a').removeClass('sel');
        var src = $(this).find('img').attr('src');
        console.log(src)
        $('.bigImg>img').attr({
            src:src
        })
    })
})