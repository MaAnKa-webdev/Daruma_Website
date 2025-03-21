// JavaScript Document

$(document).ready(function(){
    $(window).scroll(function(){ 
        if($(window).scrollTop() > 200){ 
            $('#top').fadeIn(1000); 
            }
        else {                           
            $('#top').fadeOut(1000);
            }
        });
    $('#top a').click(function(){ 
        $('html,body').animate({scrollTop:0},1000); 
            return false;
        });
});
    
