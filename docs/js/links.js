$(document).ready(function(){
    $(".buy img").hover(function(){
        $(this).attr("src", "images/arac-almak-istiyorum-02.jpg");
        }, function(){
        $(this).attr("src", "images/arac-almak-istiyorum-01.jpg");
    });
    $(".sell img").hover(function(){
        $(this).attr("src", "images/arac-satmak-istiyorum-02.jpg");
        }, function(){
        $(this).attr("src", "images/arac-satmak-istiyorum-01.jpg");
    });
});