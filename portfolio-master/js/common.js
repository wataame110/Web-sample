var canvas = $('canvas')[0];
var height = canvas.height;
var ctx = canvas.getContext('2d');

var num = 230;

var max = 100;
var min = 10;
const starMax = 180
const starMin = 10
var speed = 5;
var rotateSpeed = 0.01;

var direction = 'y';
var directionStr = direction === 'y' ? 'top' : 'left';

var box = [];
var info = windowInfo();
for (var i = 0; i < num; i++) {
    var color = [];
    var size = Math.random() * max + min;

    for (var j = 0; j < 3; j++) {
        color[j] = Math.floor(Math.random() * 255);
    }

    var boxType = ['triangle', 'star'];

    const x = -max + Math.random() * (info.windowWidth + max)
    const y = Math.random() * -(height + info.windowHeight * 5) + info.windowHeight

    const type = boxType[Math.min(Math.floor(Math.random() * boxType.length * 1.6), 1)]

    const colors = [
		'#cb8ff1', //むら
		'#f19dca', //ぴん
		'#b1e5f8' //みず
	]
    //ぴんむら
    //みずぴん
    //むらみず
    const gradeColors = [
		['#f19dca', '#cb8ff1'],
		['#b1e5f8', '#f19dca'],
		['#cb8ff1', '#b1e5f8']
	]

    box[i] = {
        type,
        x,
        y,
        width: type === 'star' ? Math.random() * starMax + starMin : Math.random() * max + min,
        height: Math.random() * max + min,
        radian: (Math.random() * 180) * Math.PI / 180,
        color: colors[Math.floor(Math.random() * colors.length)],
        gradeColors: gradeColors[Math.floor(Math.random() * colors.length)],
        rotateSpeed: (Math.floor(Math.random() * 2) === 1 ? -1 : 1) * Math.random() * rotateSpeed,
        speed: 1 + Math.random() * speed,

        opacity: Math.random() * 0.5,
        sides: 5,
        sideIndent: 0.7,
    }
};

const generateRGB = (colorString) => {
    const c = colorString.substring(1)
    return [
    parseInt(c.substring(0, 2), 16),
    parseInt(c.substring(2, 4), 16),
    parseInt(c.substring(4, 6), 16)
  ]
}

var drowFigure = {
    star: function ({
        x,
        y,
        width,
        sides,
        sideIndent,
        gradeColors,
        opacity
    }, moveX = 0, offsetAngle = 0) {
        const angle = offsetAngle * 360
        const radius = width / 2
        const sideIndentRadius = radius * (sideIndent || 0.38);
        const radOffset = (angle) ? angle * Math.PI / 180 : -Math.PI / 2;
        const radDiv = (Math.PI * 2) / sides / 2;

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        const gradient = ctx.createLinearGradient(x, y + moveX - width / 2, x, y + moveX + width);

        const [r, g, b] = generateRGB(gradeColors[0])
        const [r2, g2, b2] = generateRGB(gradeColors[1])
        gradient.addColorStop(0.0, `rgba(${r},${g},${b},${opacity + 0.3})`);
        gradient.addColorStop(1.0, `rgba(${r2},${g2},${b2},${opacity + 0.3})`);
        ctx.fillStyle = gradient;
        ctx.beginPath()
        ctx.moveTo(
            x + Math.cos(radOffset) * radius,
            y + Math.sin(radOffset) * radius + moveX
        );
        for (var i = 1; i < sides * 2; ++i) {
            var rad = radDiv * i + radOffset;
            var len = (i % 2) ? sideIndentRadius : radius;
            ctx.lineTo(
                x + Math.cos(rad) * len,
                y + Math.sin(rad) * len + moveX
            );
        }
        ctx.closePath();
        ctx.fill();
    },
    triangle: function (box, moveX, moveRotate) {

        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.strokeStyle = box.color;
        ctx.translate(
            box.x + box.width / 2,
            box.y + box.height / 2 + moveX
        );
        ctx.rotate(box.radian + moveRotate);

        ctx.beginPath();
        ctx.moveTo(box.width / 2, 0);
        ctx.lineTo(box.width, box.width / 3);
        ctx.lineTo(0, box.width);
        ctx.closePath();
        ctx.stroke();
    },

    rhombus: function (box, moveX, moveRotate) {
        var points = new Array();
        var dis = box.width;
        var degs = [-90, 0, 90, 180];

        for (var i = 0; i < degs.length; i++) {
            var deg = degs[i];
            if (i === 1 || i === 3) {
                dis = box.width / 2;
            } else {
                dis = box.width;
            }
            var x = Math.cos(deg * Math.PI / 180) * dis;
            var y = Math.sin(deg * Math.PI / 180) * dis;
            points[i] = {
                x: x,
                y: y
            };
        }

        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = 'rgba(' + box.color[0] + ', ' + box.color[1] + ', ' + box.color[2] + ',' + box.opacity + ')';
        ctx.translate(
            box.x + box.width / 2 - ((initChanvasWidth - info.windowWidth) / 2),
            box.y + box.height / 2 + moveX
        );
        ctx.rotate(box.radian + moveRotate);
        ctx.beginPath();
        ctx.moveTo(
            points[0].x,
            points[0].y
        );
        for (var i = 1; i < points.length; i++) {
            ctx.lineTo(
                points[i].x,
                points[i].y
            );
        }
        ctx.lineTo(
            points[0].x,
            points[0].y
        );
        ctx.fill();
    },

    rect: function (box, moveX, moveRotate) {
        var info = windowInfo();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        ctx.fillStyle = 'rgba(' + box.color[0] + ', ' + box.color[1] + ', ' + box.color[2] + ',' + box.opacity + ')';
        ctx.translate(
            box.x + box.width / 2 - ((initChanvasWidth - info.windowWidth) / 2),
            box.y + box.height / 2 + moveX
        );

        ctx.rotate(box.radian + moveRotate);
        ctx.fillRect(
            box.width / -2,
            box.height / -2,
            box.width,
            box.height
        );
    }
}

function boxDrow() {
    var info = windowInfo();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, info.windowWidth, height);
    for (var i = 0; i < box.length; i++) {
        drowFigure[box[i].type](
            box[i],
            info.scrollNum * box[i].speed,
            info.scrollNum ? info.scrollNum * box[i].rotateSpeed : box[i].rotateSpeed
        );
    };
}


function windowInfo() {
    var dstr = directionStr.charAt(0).toUpperCase() + directionStr.substring(1),
        scrollNum = $(window)['scroll' + dstr](),
        windowWidth = document.body.clientWidth,
        windowHeight = document.documentElement.clientHeight;

    return {
        scrollNum: scrollNum,
        windowWidth: windowWidth,
        windowHeight: windowHeight
    };
};

canvas.width = windowInfo().windowWidth;
var initChanvasWidth = canvas.width;
$(window).bind("resize", function () {
    var info = windowInfo();
    canvas.width = info.windowWidth;
    boxDrow();
});

boxDrow();
$(window).scroll(function () {
    boxDrow();
});
