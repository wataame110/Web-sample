$.parallax({
    direction: 'x'
})

$('.header_fune').parallaxFit([
    {
        start: 0,
        end: 'last',
        fromStyle: {
            left: '3%',
        },
        toStyle: {
            left: '80%',
        },
    },
])

$('.tatunoko img').parallaxFit([
    {
        start: ['#poster', -800],
        end: ['#poster', -100],
        fromStyle: {
            top: '100px',
            left: '100px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#poster').find('.fukidashi, .adobe_text, .Photoshop').parallaxFit([
    {
        start: ['#poster', -100],
        end: ['#poster'],
        fromStyle: {
            opacity: '0',
            transform: 'scale(0.5)'
        },
        toStyle: {
            opacity: '1',
            transform: 'scale(1)'
        },
        easing: 'easeOutBack'
    }
])


$('.kujira img').parallaxFit([
    {
        start: ['#cafe', -800],
        end: ['#cafe', -100],
        fromStyle: {
            top: '400px',
            left: '500px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#cafe').find('.fukidashi, .rogo_text, .Photoshop').parallaxFit([
    {
        start: ['#cafe', -300],
        end: ['#cafe'],
        fromStyle: {
            opacity: '0',
            transform: 'scale(0.5)'
        },
        toStyle: {
            opacity: '1',
            transform: 'scale(1)'
        },
        easing: 'easeOutBack'
    }
])


$('.jyugon2 img').parallaxFit([
    {
        start: ['#banner', -600],
        end: ['#banner', -150],
        fromStyle: {
            top: '300px',
            left: '500px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('.jyugon1 img').parallaxFit([
    {
        start: ['#banner', -600],
        end: ['#banner', -100],
        fromStyle: {
            top: '300px',
            left: '100px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#banner').find('.fukidashi, .banner_text, .Photoshop').parallaxFit([
    {
        start: ['#banner', -300],
        end: ['#banner'],
        fromStyle: {
            opacity: '0',
            transform: 'scale(0.5)'
        },
        toStyle: {
            opacity: '1',
            transform: 'scale(1)'
        },
        easing: 'easeOutBack'
    }
])


$('.kurage2 img').parallaxFit([
    {
        start: ['#illust', -300],
        end: ['#illust', -150],
        fromStyle: {
            top: '200px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('.kurage1 img').parallaxFit([
    {
        start: ['#illust', -600],
        end: ['#illust', -100],
        fromStyle: {
            top: '210px',
            left: '300px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#illust').find('.fukidashi, .kukei_text, .illustrator').parallaxFit([
    {
        start: ['#illust', -300],
        end: ['#illust'],
        fromStyle: {
            opacity: '0',
            transform: 'scale(0.5)'
        },
        toStyle: {
            opacity: '1',
            transform: 'scale(1)'
        },
        easing: 'easeOutBack'
    }
])


$('.kame3 img').parallaxFit([
    {
        start: ['#wine', -600],
        end: ['#wine', -100],
        fromStyle: {
            top: '250px',
            left: '250px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('.kame2 img').parallaxFit([
    {
        start: ['#wine', -300],
        end: ['#wine', -120],
        fromStyle: {
            top: '200px',
            left: '300px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('.kame1 img').parallaxFit([
    {
        start: ['#wine', -200],
        end: ['#wine', ],
        fromStyle: {
            top: '300px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#wine').find('.fukidashi, .label_text, .illustrator').parallaxFit([
    {
        start: ['#wine', -300],
        end: ['#wine'],
        fromStyle: {
            opacity: '0',
            transform: 'scale(0.5)'
        },
        toStyle: {
            opacity: '1',
            transform: 'scale(1)'
        },
        easing: 'easeOutBack'
    }
])
$('#goal').find('.kujira_goal img').parallaxFit([
    {
        start: ['#goal', -300],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#goal').find('.jyugonn img').parallaxFit([
    {
        start: ['#goal', -230],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#goal').find('.goal_tatunoko img').parallaxFit([
    {
        start: ['#goal', -220],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#goal').find('.goal_kurage1 img').parallaxFit([
    {
        start: ['#goal', -200],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#goal').find('.goal_kame3 img').parallaxFit([
    {
        start: ['#goal', -300],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#goal').find('.goal_kame2 img').parallaxFit([
    {
        start: ['#goal', -210],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])

$('#goal').find('.goal_kame1 img').parallaxFit([
    {
        start: ['#goal', -200],
        end: ['#goal'],
        fromStyle: {
            top: '100px',
            left: '200px'
        },
        toStyle: {
            top: '0px',
            left: '0px'
        },
        easing: 'easeOutQuint'
    }
])
