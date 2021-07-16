console.log("your index.js file is loaded correctly!");
$(document).ready(function(){
$("button").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "red");
    }  
  });
});


$(document).ready(function(){
    $(".parent").click(function(){
      $(".child").slideDown("slow");
   


  
 
