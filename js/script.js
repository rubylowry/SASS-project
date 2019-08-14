console.log('my script is working');

$(document).ready(function(){


   $('#menu').click(function(){
      $('nav').slideToggle('active');
   })
   $('#close').click(function(){
     $('nav').hide();
   })


});
