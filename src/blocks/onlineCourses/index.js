import "./onlineCourses.sass";
import $ from "jquery";

$(window).on('load', function(){
         
    $('.js-online__courses').on('click', function()
    {
        $.ajax({
            type : 'GET',
            url : 'http://localhost:8080/courses.html',
            dataType : 'html',
            success : function(data){
                const cards = $('.online-courses__cards');
                const card = $(data).find('.online-courses__card-wrap');
                
                $('.online-courses__more-img').addClass('online-courses__load');
                setTimeout(() => {
                    for(let i = 0; i < 9; i++)
                        cards.append(card[i]);
                    
                    $('.online-courses__more-img').removeClass('online-courses__load');
                }, 1000)
            }
        }); 
    });  
}); 


    