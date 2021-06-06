$(document).ready(function(){
    
    
var loginForm = document.getElementById("loginForm"),
    
    regForm = document.getElementById("regForm"),
    
    Indi = document.getElementById("indicator");
    
    $(".form-btns .log").click(function(){
        
            $(regForm).css("transform","translateX(0px)");        
                            
            $(loginForm).css("transform","translateX(0px)");
            
            $(Indi).css({
                
                "transform":"translateX(20px)",
                "width":"60%"
                
                });
        
        });
    
    
    $(".form-btns .reg").click(function(){
        
            $(loginForm).css("transform","translateX(300px)").fadeIn();
            
            $(regForm).css("transform","translateX(300px)");
            
            $(Indi).css({
                
                "transform":"translateX(80px)",
                "width" : "90%"
                
                }); 
        
        });
        
   
   
   

       
       
    
});//jquery document closed