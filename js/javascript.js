



$(document).ready(function(){

$('.panels__panel-desc1').hide();
$('.panels__panel-open').click(function() {
$('.panels__panel-open i').toggleClass('fa-chevron-up');

$('.panels__panel-desc1').slideToggle("slow");



}); 


$('.panels__panel-desc2').hide();
$('.panels__panel-open2').click(function() {
$('.panels__panel-open2 i').toggleClass('fa-chevron-up');

$('.panels__panel-desc2').slideToggle("slow");
});

    });

    

    // $('.panels__panel-open').click(function(){
    //     if (!$(this).data('status')) {
    //         $('.fa-chevron-down').replaceWith("<i class='fas fa-chevron-up'></i>"); 
    //     //   $(this).append('<i class="fas fa-chevron-up"></i>')
    //         $(this).data('status', true);
    //     }
    //     else {
    //         $("<i class='fas fa-chevron-down'></i>").replaceWith("<i class='fas fa-chevron-up'></i>"); 
    //       //$(this).append('<i class="fas fa-chevron-down"></i>');
    //       $(this).data('status', false);
    //     }
    //   });
   