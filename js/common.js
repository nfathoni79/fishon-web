$(document).ready(function(){
    $(".menu-toggle").click(function(e){
       
        e.preventDefault();

        $(".wrapper-page").toggleClass("toggled");

        if ($(window).width() < 992) {

            if ($(".wrapper-page").hasClass("toggled")) {
                $(".menu-toggle .fa").removeClass("fa-bars");
                $(".menu-toggle .fa").addClass("fa-times");
                aa = "<div class='overlay-sidebar' id='overlay-sidebar'></div>";

                if ($(".side-menu").hasClass("toggled-minimized")) {

                    $(".side-menu").removeClass("toggled-minimized");
                    
                    
                    
                    
                } else {
                    $(".side-menu").addClass("toggled-minimized");
                }
    
    
                $(".wrapper-page").prepend(aa);
                $(".overlay-sidebar").fadeIn("slow");
          
            } else {
                $(".menu-toggle .fa").removeClass("fa-times");
                $(".menu-toggle .fa").addClass("fa-bars");
                
                if ($(".side-menu").hasClass("toggled-minimized")) {

                    $(".side-menu").removeClass("toggled-minimized");
                    
                    
                    
                    
                } else {
                    $(".side-menu").addClass("toggled-minimized");
                }


                $(".overlay-sidebar").fadeOut("slow");
                setTimeout(function () {
                    $(".overlay-sidebar").remove();
                }, 500);
               
    
            }
        }
    
       
        


    });
    
}); 