$( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });
   $(".burger-menu").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });
});



// SMOOTH SCROLL JS

// // Bind this action to all "A" links
// $(document).on('click', 'a', function(event){
//     // Stop the browser from automatically jumping to the target
//     event.preventDefault();
//
//     // Get the offest location of the target element
//     $('html, body').animate({
//         // Smoothly Move To That Offset
//         scrollTop: $( $.attr(this, 'href') ).offset().top
//     }, 1500);
// });
