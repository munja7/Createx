import './header.sass';
import $ from 'jquery';

$(window).on('load', function(){
    const url = document.location.href;
    $.each( $(".header-nav__item-link"), function(){
        if(this.href == url)
        {
            $(this).addClass('js-header__active-link');
        }
        if(url == document.location.origin + '/post.html')
        {
            $.each( $(".header-nav__item-link"), function(){
                if(this.href == document.location.origin + '/blog.html')
                    $(this).addClass('js-header__active-link');
            });
        }
        if(url == document.location.origin + '/event.html' || url == document.location.origin + '/eventsGreed.html')
        {
            $.each( $(".header-nav__item-link"), function(){
                if(this.href == document.location.origin + '/eventsList.html')
                    $(this).addClass('js-header__active-link');
            });
        }
        if(url == document.location.origin + '/course.html')
        {
            $.each( $(".header-nav__item-link"), function(){
                if(this.href == document.location.origin + '/courses.html')
                    $(this).addClass('js-header__active-link');
            });
        }
    });
});
    