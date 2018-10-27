/*global 4, alert, console*/
$(function(){
    
    'use strict';
    
    // triger nice scroll
    $('html').niceScroll({
        cursorcolor: '#f7600e',
        cursorwidth:10,
        cursorborder:'1px solid #f7600e'
        
        
    });
    
    
    //change header height
    $('.header').height($(window).height());
    
    //scroll to features
    $('.header .arrow i').click(function(){
        $('html, body').animate({
            
            scrollTop:$('.features').offset().top
            
        },1000)
        
    })
    //scroll to hire us
     $('.work').click(function(){
        $('html, body').animate({
            
            scrollTop:$('.ourwork').offset().top
            
        },1000)
        
    })
       //scroll to works
     $('.hir').click(function(){
        $('html, body').animate({
            
            scrollTop:$('.contact').offset().top
            
        },1000)
        
    })
    
    //showmore
    $(".show-more").click(function(){
        $('.ourwork .hidden').fadeToggle(1000);
        
    })
    
    //slider testim
    
    var leftarrow = $('.testim .fa-chevron-left'),
        rightarrow = $('.testim .fa-chevron-right');
    function checkclient(){
        
        if($('.client:first').hasClass('active')){
            leftarrow.fadeOut();
            
        }else{
            leftarrow.fadeIn();
        }
        
          if($('.client:last').hasClass('active')){
            rightarrow.fadeOut();
            
        }else{
            rightarrow.fadeIn();
        }
    }
 checkclient();
    
    $('.testim i').click(function (){
        if($(this).hasClass('fa-chevron-right')){
            $('.testim .active').fadeOut(1000,function(){
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn(1000);
            checkclient();
            })
        }else{
               $('.testim .active').fadeOut(1000,function(){
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(1000);
                checkclient();
            })
        }
        
        
         
    })
})//end main
