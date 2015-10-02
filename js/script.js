$(document).ready(function () {

    $('.togle-menu').on('click', function(){
        var pos = $('.menu').attr('data-pos');
        if(pos == 0){
            $('.main-slide').animate(
                {
                    width: "50%"
                },
                {
                    duration: 700,
                    step: function(){
                        init();
                    },
                    complete: function(){
                        $('.menu').fadeIn('slow');
                    }
                });
            $('.menu').attr('data-pos', 1);
        }
        else
        {
            $('.menu').css({'display':'none'});
            $('.main-slide').animate({
                    width: "75%"
                },
                {
                    duration: 700,
                    step: function(){
                        init();
                    },
                    complete: function(){
                        $('.menu').css({'display':'none'});
                    }
                });
            $('.menu').attr('data-pos', 0);
        }
    });

    $('.item').on('click', function(){
        var num = $(this).attr('data-num');
        $('.main-slide img').each(function(){
            $(this).removeClass('active-slide');
            $(this).css({'display':'none'});
        });

        $('.descr-slide').each(function(){
            $(this).removeClass('active-descr');
        });

        $('.item').each(function(){
            $(this).removeClass('item-active');
        });
        $(this).addClass('item-active');
        $('#d' + num).addClass('active-descr');
        $('#s' + num).addClass('active-slide');
        $('#s' + num).css({'display':'block', 'opacity':'0'});
        $('#s' + num).animate({
                'opacity':'1'
            },
            {
                duration: 700,
                step: function(){
                    init();
                }
            });
    });

    $('.next-slide').on('click', function(){

        var last = $('.main-slide img').last().attr('id');

        if($('.active-slide').attr('id') == last){
            next = $('.main-slide img').first();
            id = next.attr('id');
            num = id.substr(1);
        }
        else {
            var next = $('.active-slide').next();
            var id = next.attr('id');
            var num = id.substr(1);
        }

        $('.item').each(function(){
            $(this).removeClass('item-active');
        });

        $('.descr-slide').each(function(){
            $(this).removeClass('active-descr');
        });

        $('#item_' + id).addClass('item-active');

        $('.main-slide img').each(function(){
            $(this).removeClass('active-slide');
            $(this).css({'display':'none'});
        });
        $('#d' + num).addClass('active-descr');
        next.addClass('active-slide');
        next.css({'display':'block', 'opacity':'0'});
        next.animate({
                'opacity':'1'
            },
            {
                duration: 700,
                step: function(){
                    init();
                }
            });
    });

    $('.prev-slide').on('click', function(){

        var first = $('.main-slide img').first().attr('id');

        if($('.active-slide').attr('id') == first){
            next = $('.main-slide img').last();
            id = next.attr('id');
            num = id.substr(1);
        }
        else {
            var next = $('.active-slide').prev();
            var id = next.attr('id');
            var num = id.substr(1);
        }

        $('.item').each(function(){
            $(this).removeClass('item-active');
        });

        $('.descr-slide').each(function(){
            $(this).removeClass('active-descr');
        });

        $('#item_' + id).addClass('item-active');

        $('.main-slide img').each(function(){
            $(this).removeClass('active-slide');
            $(this).css({'display':'none'});
        });
        $('#d' + num).addClass('active-descr');
        next.addClass('active-slide');
        next.css({'display':'block', 'opacity':'0'});
        next.animate({
                'opacity':'1'
            },
            {
                duration: 700,
                step: function(){
                    init();
                }
            });
    });
});


function init(){
    var hMainSlide = $('.main-slide').height();
    var hActiveSlide = $('.active-slide').height();
    var top = (hMainSlide - hActiveSlide) / 2;
    $('.active-slide').css({'top':top});
}