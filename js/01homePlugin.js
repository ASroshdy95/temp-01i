$(document).ready(function(){
    
//header height = window height !but still cant resize it vertically         
    $(".header,section.account").css({
            
        "min-height": $(window).height() 
            
                });
    
         
//niceScrolling trigger
    $("body").niceScroll({
        
        cursorcolor: "#FF523b",
        
        cursorborder: "1px solid #FF523b",
                
                });


//wow.js
new WOW().init();
 
    
//start enable the overlay of the categories pic in the features
$(".categories .category").hover(function(){
    
      $(this).children(".category .overlay").fadeIn(500).animate({
        
            "height":"100%"
        
                },300);
    
    },function(){
    
         $(this).children(".category .overlay").animate({
        
        height:0
        
        },400); 
    
    });
//End enable the overlay of the categories pic in the features
 
 
 
//Start scroll to top button
$(window).scroll(function(){
    
    if(  $(window).scrollTop() >= $(".categories,.products,.selected-product-details:last-child,.cart-page,.gallery .prod-info h1:first-of-type").offset().top ){
        
        $(".scroll-to-top").fadeIn(300);
        
        $("nav").addClass("navbar-fixed-top");
        
        $(".navbar-default").css({
            
            "background-color":"#fff",
            
            "z-index":"9999",
            
            "opacity":"0.9",
            
            "box-shadow": "0px 0px 1px 0px gray"
            
            });//css func for nav
        
        $(".navbar .navbar-right li:first-child .home-sections").css({
            
            "background-color":"#FF523b",
            
            });
    
        
        $(".navbar .navbar-right li:first-child .home-sections ul li").css({
            
            "color":"#FFF",
            
            "border-bottom":"none",
            
            });
        
        
    }else{
        
        $(".scroll-to-top").fadeOut(300);
        
        $("nav").removeClass("navbar-fixed-top");
        
        $(".navbar-default").css({
            
            "background-color":"transparent",
            
            "z-index":"1",
            
            "opacity":"1",
            
            "box-shadow": "none" });//css func for nav
        
         $(".navbar .navbar-right li:first-child .home-sections").css({
            
            "background-color":"#fff",
            
            });
         
          $(".navbar .navbar-right li:first-child .home-sections ul li").css({
            
            "color":"#000"
            
            });
    
        
    }//else
        //the click on the btn
    $(".scroll-to-top").click(function(){
        
        $("html,body").animate({
            
            scrollTop : "0",
            
            },1000);
        
        });//click func for the S-T-T btn
    
    //active class in the nav-bar
    if( $(window).scrollTop() >= $("section").offset().top ){
        
        
    }
    
    
    });//scroll func
//End scroll to top button
    
    
    
//Start loader overlay    
    $(window).on("load",function(){
        
       $(".loader-overlay").fadeOut(8000);
        
        $(".loader-overlay p:nth-of-type(1)").fadeIn(100).fadeOut(600);
        
        $(".loader-overlay p:nth-of-type(2)").delay(1000).fadeIn(200).fadeOut(600);
        
        $(".loader-overlay p:nth-of-type(3)").delay(2000).fadeIn(300).fadeOut(600);
        
        $(".loader-overlay p:nth-of-type(4)").delay(3000).fadeIn(300,function(){
            
            $(".loader-overlay p:nth-of-type(4) span").fadeIn(400,function(){
                
                $(".loader-overlay p:nth-of-type(4) span:not(:nth-of-type(2))").fadeOut(300);
                
                $(".loader-overlay p:nth-of-type(4) span:nth-of-type(2)").animate({
                    
                    "font-size":"130px"
                    
                    },2000);
                
                });
            
            });
        
        });
   


//click on nav-bar tabs
$("nav .navbar-nav li a").on("click",function(){
    
    $(this).addClass("active").parent("li").siblings("li").children("a").removeClass("active");
    
    });

    
//home hover to display the home sections list
$(".navbar .navbar-right li:first-child").mouseenter(function(){
    
    $(".navbar .navbar-right li:first-child .home-sections").fadeIn(10).animate({
        
        "width":"200px"
        
        },200,function(){
            
        $(".navbar .navbar-right li:first-child .home-sections ul li").fadeIn(100);
            
            });
    });

$(".navbar .navbar-right li:first-child .home-sections").mouseleave(function(){
    
    $(".navbar .navbar-right li:first-child .home-sections").fadeOut(1,function(){
        
        $(".navbar .navbar-right li:first-child .home-sections").animate({
            
            "width":"0"
            
            });   
        
        });
    
    });

    

//Start testimonials section
$(".testimonials .customers-feedback .users").on("mouseenter",function(){
    
    $(this).addClass("active").siblings(".users").removeClass("active");
    
    });    
//End testimonials section




    });//document ready