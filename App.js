$(document).ready(function () {
    $(window).scroll(function () {
        var hT = $('.top').offset().top
        console.log(hT)
        if (hT > 200) {
            $('.top').addClass('addBox-shadow')
        }
        if (hT < 200) {
            $('.top').removeClass('addBox-shadow')
        }
    });
})