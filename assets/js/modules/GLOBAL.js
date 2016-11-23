/**
 *      Global functions
 */

global.jQuery = require('jquery');
global.$ = global.jQuery;

import 'gsap';
import '../libs/MorphSVGPlugin.min';
import '../libs/jquery.validate';
import slick from "slick-carousel";
import jQueryBridget from 'jquery-bridget';
import masonry from 'masonry-layout';
import AOS from 'aos';


(function($) {
    $.fn.formSubmit = function() {
        $(this).each(function() {
            var that = this;
            $(this).validate({
                rules: {
                    name: "required",
                    email: {
                        required: true,
                        email: true
                    }
                },
                messages: {
                    name: formValidateSettings.name,
                    email: {
                        required: formValidateSettings.emailEmpty,
                        email: formValidateSettings.emailIncorrect
                    }
                },

                submitHandler: function(form, e) {
                    e.preventDefault();
                    var $form = $(that);
                    $.ajax({
                        type: $form.attr('method'),
                        url: $form.attr('action'),
                        dataType: 'json',
                        data: $form.serialize()
                    }).done(function(data) {

                        $form.hide(200);
                        $form[0].reset();

                        setTimeout(function() {
                            $form.parent().find('.form-success').show(200);
                        }, 200);

                        setTimeout(function() {
                            $form.parent().find('.form-success').hide(200);
                        }, 3000);

                        setTimeout(function() {
                            $form.parent().find('.form-success');
                            $form.show(200);
                        }, 3200);

                    }).fail(function() {
                        console.log('fail');
                    });
                }
            });
        })
    }
})(jQuery);

export default {

    init(){
        this.headerFunctions();
        this.scrollDown();
        this.scrollToAnchor();
        this.scrollAnimations();
        this.masonry();
        this.formValidate();
        //this.postFormData();
    },

    headerFunctions () {
        $('.site-navigation').on('click', () => {
            $('.toggle-menu').removeClass('active');
            $('.site-navigation').removeClass('active');
            $('body').removeClass('menu-open');
        });

        $('.menu-concept, .menu-inside, .site-authorisation').on('click', (e) => {
            e.stopPropagation();
        });

        $('.toggle-menu').on('click', (e) => {
            e.preventDefault();

            $('body, html').animate({
                scrollTop: $('.site-header').offset().top
            }, 500);

            $('.toggle-menu').toggleClass('active');
            $('.site-navigation').toggleClass('active');
            $('body').toggleClass('menu-open');

        });

        $('.has-sub').on('click', function() {
            $(this).find('.sub-menu').stop().slideToggle();
        });
    },

    scrollDown() {
        $('.scroll-down').on('click', function() {
            var position = $(this).closest('section').offset().top + $(this).closest('section').prop('scrollHeight');

            $('body, html').animate({
                'scrollTop': position
            }, 800)
        });
    },

    scrollToAnchor() {
        if($('[data-anchor]').length) {
            $('[data-anchor]').each(function(el) {
                $(this).on('click', function(e) {
                    e.preventDefault();
                    var anchor = $($(this).attr('href'));

                    if(anchor.length) {
                        $('body, html').animate({
                            'scrollTop': anchor.offset().top
                        }, 800)
                    }

                    if ($('body').hasClass('menu-open')) {
                        $('.toggle-menu').removeClass('active');
                        $('.site-navigation').removeClass('active');
                        $('body').removeClass('menu-open');
                    }

                })
            })
        }
    },

    scrollAnimations() {
        AOS.init({
            duration: 800,
            easing: 'ease',
            offset: 25
        });
    },

    masonry() {
        jQueryBridget( 'masonry', masonry);
        $('.masonry-grid').masonry({
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item',
            gutter: 0
        });
    },

    formValidate() {

        $('form').formSubmit();

    },

    postFormData() {

    }

};