import './header.sass';
import $ from 'jquery';

$(window).on('load', function(){
    const url = document.location.href;
    $.each( $(".header-nav__item-link"), function(){
        if(this.href == url)
        {
            $(this).addClass('js-header__active-link');
        }
    });
});
    