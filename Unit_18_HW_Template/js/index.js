

  console.log("your index.js file is loaded correctly!");
$(document).ready(function(){
$("button").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "#303031");
    }, 
    click: function(){
      $(this).css("background-color", "red");
    }  
  });
});



$("button").click(function(){
  $("div").animate({
    left: '250px',
    opacity: '0.5',
    height: '150px',
    width: '150px'
  });
}); 

   


$(document).ready(function() {
  $(".move1").animate({left: "+=100"}, 2000);
  $(".move1").animate({left: "-=100"}, 1000);
});

$(document) .ready(function() {
  $(".move2").animate({left: "+=1000"}, 0000);
  $(".move2").animate({left: "-=1000"}, 2100);
});






