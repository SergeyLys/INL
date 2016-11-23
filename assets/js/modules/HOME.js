/**
 *      Home page
 */

export default {

    init() {
        this.closeBook();
        this.taskHover();
        this.numericGrid();
        this.canvas();
        this.offsetSlider();
    },

    closeBook () {
        $('.home-book .close-button').on('click', () => {
            $('.home-book').slideUp(200);
        });
    },

    taskHover() {
        $('.b-tasks').on('mousemove', function(e) {
            if ($(window).width() >= 1024) {
                var line = $('.cursor-line');
                var lineCenter = [line.offset().left + line.width() / 2, line.offset().top + line.height() / 2];
                var angle = Math.atan2(e.pageX - lineCenter[0], - (e.pageY - lineCenter[1])) * (180 / Math.PI);

                if (angle >= 30) {
                  angle = 30;
                }

                if (angle <= -30) {
                  angle = -30;
                }

                if (angle >= 10) {
                    $('.task--left > .b-task_descr').css({
                        'filter': 'blur(3px)'
                    });
                    $('.task--right > .b-task_descr').css({
                        'filter': 'blur(0)'
                    });
                }

                if (angle <= -10) {
                    $('.task--right > .b-task_descr').css({
                        'filter': 'blur(3px)'
                    });
                    $('.task--left > .b-task_descr').css({
                        'filter': 'blur(0)'
                    });
                }

                line.css({ "-webkit-transform": 'rotate(' + angle + 'deg)'});
                line.css({ '-moz-transform': 'rotate(' + angle + 'deg)'});
                line.css({ 'transform': 'rotate(' + angle + 'deg)'});
                line.css({ 'opacity': '1'});
            }
        });
    },

    numericGrid() {
        $('.numeric-grid_item').each(function(ind) {
            if ($(this).find('.number').length != 0) {
                $(this).find('.number > span').html(ind);

                if (ind % 4 == 3) {
                    $(this).find('.number, .number > span').css({
                        'transform': 'rotate(-12deg)'
                    })
                } else if (ind % 4 == 1) {
                    $(this).find('.number, .number > span').css({
                        'transform': 'rotate(6deg)'
                    })
                }
            }
        });
    },

    canvas() {
        var triggered_times = 0;

        var animateSvgInit = function () {
            if ($('.b-practice_title').length) {
                var pagePos = window.pageYOffset;
                var anchorPos = $('.b-practice_title').offset().top - ($('.b-practice_title').height() + $('.b-practice_title').height() / 2);
                var tl = new TimelineMax();
                if (pagePos > anchorPos && triggered_times == 0 && $(window).width() >= 1024) {

                    var group1 = $('#path-01_1_'),
                        group2 = $('#path-02'),
                        group3 = $('#path-03'),
                        group4 = $('#path-04'),
                        group5 = $('#path-05');

                    tl
                        .set(group1, {opacity: 1})
                        .set(group2, {opacity: 1})
                        .set(group3, {opacity: 1})
                        .set(group4, {opacity: 1})
                        .set(group5, {opacity: 1});

                    tl
                        .to(group1, 1.5, {opacity: 1, morphSVG: 'M628.3,14.4L9.1,64.5'},.5)
                        .to(group2, 1.5, {opacity: 1, morphSVG: 'M9.1,64.5l159.8,181.4'},.5)
                        .to(group3, 1.5, {opacity: 1, morphSVG: 'M168.8,245.8L628.3,14.4'},.5)
                        .to(group4, 1.5, {opacity: 1, morphSVG: 'M529,303.4L9.1,64.5'},.5)
                        .to(group5, 1.5, {opacity: 1, morphSVG: 'M628.3,14.4l-99.3,289'},.5);

                    triggered_times = 1;
                } else if (pagePos > anchorPos && triggered_times == 0 && $(window).width() >= 768 &&
                            pagePos > anchorPos && triggered_times == 0 && $(window).width() <= 1023) {
                    var group1 = $('#path-11_1_'),
                        group2 = $('#path-12'),
                        group3 = $('#path-13'),
                        group4 = $('#path-14'),
                        group5 = $('#path-15');

                    tl
                        .set(group1, {opacity: 1})
                        .set(group2, {opacity: 1})
                        .set(group3, {opacity: 1})
                        .set(group4, {opacity: 1})
                        .set(group5, {opacity: 1});

                    tl
                        .to(group1, 1.5, {opacity: 1, morphSVG: 'M264.53333,14.4l-255,50.1'},.5)
                        .to(group2, 1.5, {opacity: 1, morphSVG: 'M9.53333,64.5l65.80911,181.39999'},.5)
                        .to(group3, 1.5, {opacity: 1, morphSVG: 'M75.30125,245.8L264.53333,14.4'},.5)
                        .to(group4, 1.5, {opacity: 1, morphSVG: 'M223.63943,303.39999L9.53333,64.5'},.5)
                        .to(group5, 1.5, {opacity: 1, morphSVG: 'M264.53333,14.4l-40.89389,289'},.5);
                }
            }
        };

        animateSvgInit();

        $(window).on('scroll', function() {
            animateSvgInit();
        });

    },

    offsetSlider() {
        $('.expert-slider').slick({
            // centerMode: true,
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        // slidesToShow: 1
                        settings: "unslick"
                    }
                }
            ]
        });
    }

};