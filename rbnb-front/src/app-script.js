import $ from "jquery";

$(document).ready(function(){
    
    $(".collapse-menu").click(()=>{
        if($(".items")[0].style.display == "inline-grid")
            $(".items").css("display", "none");
        else
            $(".items").css("display", "inline-grid");
    });

    $(window).resize(()=>{
        if($(window).width() >= 900)
            $(".items").css("display", "none");
        
    })

});