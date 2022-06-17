$(function () {
    $(window).scroll(function () {
        var s = $(this).scrollTop(),
            m = 100;
        if (s >= m) {
            $("#toTop").fadeIn(500);
        } else {
            $("#toTop").fadeOut(500);
        }
    });
});



var maxHeight = 0,
    scrPosition = Math.round($(window).scrollTop()),
    scrVal = 0;

/*　初期色　*/
var scrValdR = 29,
    scrValdG = 186,
    scrValdB = 108;

/*　最大色　*/
var scrvalRM = 128,
    scrValGM = 207,
    scrValBM = 60;


/* 差値 */
var diffR = scrvalRM - scrValdR,
    diffG = scrValGM - scrValdG,
    diffB = scrValBM - scrValdB;


window.onload = function () {
    doInput()
};

function doInput() {
    var pval = document.getElementById("pval").value;
    $('#box').html('<p>aiueo</p>'.repeat(pval));

    maxHeight = document.documentElement.getBoundingClientRect().height - window.innerHeight;
    $('#smx').text(maxHeight);

    var scrValR = scrValdR + Math.round((scrPosition - 100) / (maxHeight - 100) * diffR),
        scrValG = scrValdG + Math.round((scrPosition - 100) / (maxHeight - 100) * diffG),
        scrValB = scrValdB + Math.round((scrPosition - 100) / (maxHeight - 100) * diffB);
    $('#scrVal').text("rgb( " + scrValR + " , " + scrValG + " , " + scrValB + " )");

}


$(function () {

    // スクロールでトリガ
    $(window).scroll(function () {

        //　スクロール量を取得
        scrPosition = Math.round($(this).scrollTop());
        // スクロール量をパーセントに変換
        sPm = Math.round((scrPosition / maxHeight) * 100);

        // HTMLにスクロール量を表示
        $('#scr').text(scrPosition);
        $('#sPm').text(sPm + "%");

        /*
        // Brightness値を計算 表示　及び　CSS書き換え
        // 1スクロールで100　最大200
        scrVal = 100 + Math.round((scrPosition - 100) / (maxHeight - 100) * 100);
        $('#scrVal').text(scrVal);
        document.getElementById("toTop").style.filter = "brightness(" + scrVal + "%)";
        */

        // rgb値を計算 表示　及び　CSS書き換え
        scrValR = scrValdR + Math.round((scrPosition - 100) / (maxHeight - 100) * diffR);
        scrValG = scrValdG + Math.round((scrPosition - 100) / (maxHeight - 100) * diffG);
        scrValB = scrValdB + Math.round((scrPosition - 100) / (maxHeight - 100) * diffB);
        document.getElementById("toTopMk").style.fill = "rgb(" + scrValR + "," + scrValG + "," + scrValB + ")";
        $('#scrVal').text("rgb( " + scrValR + " , " + scrValG + " , " + scrValB + " )");
    });
});
