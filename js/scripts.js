$(function(){
    $(".carousel").carousel({interval: 2000 } );
    $("#carouselButton").click(function(){
        if($("#carouselButton").children("i").hasClass("fa-pause")){
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        }else{
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    
})

    $(document).ready(function(){
        $("#reserveButton").click(function(){
            $("#reserveModalBody").modal('show');
        });

        $("#loginButton").click(function() {
            $("#loginModalBody").modal("show");
        });

        $("#reserveModalHide").click(function() {
            $("#reserveModalBody").modal('hide');
        });

        $("#loginModalHide").click(function() {
            $("#loginModalBody").modal('hide');
        });
        
    });


// $(function(){
//     $("#reserveButton").click(function() {
//         $("#reserveButton").modal("show");
//       });

//     $("#loginButton").click(function() {
//         $("#loginButton").modal("show");
//       });
// })    
   