$(document).ready(function(){
    $(window).scroll(function(){
       if(this.scrollY > 10){
           $('.navbar').addClass("sticky");
       }else{
           $('.navbar').removeClass("sticky");
       }     
    });
        
    //toogle menu/navbar fazer alteração aqui para mudar o icon para icon close
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
       /*  $('.menu-btn i').toggleClass("active"); */
    /*    if(){
        $(".menu-btn ion-icon").attr("name","close-outline");
       }else{
        $(".menu-btn ion-icon").attr("name","menu-outline");
       } */
    });

    
});