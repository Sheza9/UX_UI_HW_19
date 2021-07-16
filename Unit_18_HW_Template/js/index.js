console.log("your index.js file is loaded correctly!");


$(function(){
    $('ul.parent > li').hover(function() {
        $(this).find('ul.child').show(200);
    }, function(){
        $(this).find('ul.child').hide(200);
    });
});


// had a go at a dropdown for contact me section. code wont seem to work?