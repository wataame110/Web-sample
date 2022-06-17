jQuery(function () {
    var pagetop = $('#back_to_top'),
        navmenu = $('#nav')
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) { //150pxスクロールしたら表示
            pagetop.addClass('slidein');
            navmenu.addClass('slidein');
        } else {
            pagetop.removeClass('slidein');
            navmenu.removeClass('slidein');
        }
    });
});
