$(document).ready(function(){
    
    $(".cart-page table:first-child p.remove-prod").click(function(){
        
        $(this).parent(".info").parent("td").parent("tr").remove();
        
        });
    
    
 //Start Calculate Item of table Prices by using function called 'parseInt()' 
  var allPrices = 0 ;
  
  $(".cart-page .table-prices tr .price").each(function(){
   
   allPrices += parseInt( $(this).text());
   
   });
  
  $(".table-prices tr .total").text( "$"+allPrices  );//subtotal 
    
//test//ineed to make the final price = tax + sub total
  var totP = 0 ;
  
  $(".cart-page .table-prices tr .tot-price").each(function(){
   
   totP += parseInt( $(this).text() );
   
   });
  
  $(".table-prices tr #finalPrice").text( "$"+totP  );//total  
  
  
    
    });//documentReady
    