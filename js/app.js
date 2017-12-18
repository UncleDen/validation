//CVV info
$(document).ready(function () {
    
    var cvv = $('#cvv-info');
    
    $('.question').on('click', function(e) { 
        e.stopPropagation();
        cvv.css("display", "block");
    });
    
    $('html').click(function() {
        if (cvv.css("display") == "block") {
           cvv.css("display", "none");      
        }
    });
});//end script

//Validation

 $(document).ready(function () {

     $('#name, #email, #password, #cvv').unbind().blur(function() {

         var id = $(this).attr('id');
         var val = $(this).val();
         var name = $('.error-name').css("display") == "block",
         email = $('.error-email').css("display") == "block",
         pass = $('.error-password').css("display") == "block",
         cvv = $('.error-cvv').css("display") == "block";

         $('html').click(function () {
             if(name || email || pass || cvv) {
                 $('.error-name').slideUp("fast");
                 $('.error-email').slideUp("fast");
                 $('.error-password').slideUp("fast");
                 $('.error-cvv').slideUp("fast");
             }
         });

       switch(id) {         
            //name
            case 'name':
               
               var rv_name = /^[a-zA-Zа-яА-Я]+$/; 
               
               if(val.length > 2 && val != '' && rv_name.test(val)) {                  
                    $(this).addClass('not_error');
                    $('#check-name').animate({'opacity': '1'},400);
                    $(this).removeClass('empty'); 
                    $(this).css("background", "");
                   
                   if($('.error-name').css("display") == "block") {
                        $('.error-name').slideUp("fast");
                   }
               } else {    
                    $(this).addClass('empty');
                   
                   if ($('#check-name').css("opacity") == "1" && $(this).hasClass('not_error')) {
                      $(this).removeClass('not_error');
                      $('#check-name').animate({'opacity': '0'},400);
                   }
                  $('.error-name').html('Имя должно содержать более 2х символов').slideDown("fast");
               }

               
            break;

           // email
           case 'email':
               
               var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
               
               if(val != '' && rv_email.test(val)) {      
                    $(this).addClass('not_error');
                    $('#check-email').animate({'opacity': '1'},400);
                    $(this).removeClass('empty'); 
                    $(this).css("background", "");
                   
                   if($('.error-email').css("display") == "block") {
                        $('.error-email').slideUp("fast");
                   }
               } else {   
                    $(this).addClass('empty');
                   
                   if ($('#check-email').css("opacity") == "1" && $(this).hasClass('not_error')) {
                      $(this).removeClass('not_error');
                      $('#check-email').animate({'opacity': '0'},400);
                   }
                  $('.error-email').html('Введите верный email').slideDown("fast");
               }
               
           break;

          // password
          case 'password':
               
              if(val.length >= 5 && val != '') {               
                    $(this).addClass('not_error');
                    $('#check-password').animate({'opacity': '1'},400);
                    $(this).removeClass('empty'); 
                    $(this).css("background", "");
                  
                   if($('.error-password').css("display") == "block") {
                        $('.error-password').slideUp("fast");
                   }
               } else { 
                    $(this).addClass('empty');
                   
                   if ($('#check-password').css("opacity") == "1" && $(this).hasClass('not_error')) {
                      $(this).removeClass('not_error');
                      $('#check-password').animate({'opacity': '0'},400);
                   }
                  $('.error-password').html('Пароль должен быть длинее 5 символов').slideDown("fast");
              }
               
          break;
               
         // cvv       
         case 'cvv':
               
              if(val.length >= 3 && val != '') { 
                    $(this).addClass('not_error');
                    $('#check-cvv').animate({'opacity': '1'},400);
                    $(this).removeClass('empty'); 
                    $(this).css("background", "");
                  
                   if($('.error-cvv').css("display") == "block") {
                        $('.error-cvv').slideUp("fast");
                   }
               } else {            
                    $(this).addClass('empty');
                   
                   if ($('#check-cvv').css("opacity") == "1" && $(this).hasClass('not_error')) {
                      $(this).removeClass('not_error');
                      $('#check-cvv').animate({'opacity': '0'},400);
                   }
                  $('.error-cvv').html('Введите верный CVV').slideDown("fast");
              }
               
          break;

       } // end switch

     }); // end blur

function lightEmpty(){
      $('ul').find('.empty').css({'background':'#ffb4b4'});
    }
     
 $('#send').click(function(e){
     if($('.not_error').length == 4) {     
      location.reload()        
     } else {         
        lightEmpty();          
        return false;
     }

   }); // end submit

  }); // end script