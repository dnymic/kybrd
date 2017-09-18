$(document).ready(function(){
    // alert ('DOM loaded'); 

    

  
    $( "#keyboard" ).draggable().css("display","none");


    $("#toggle").click(function(){
        $("#jkeyboard").toggle();
        // alert('Keyboard cliked');
    });

    // $("#keyboard tooltipped").tooltip({position: "top"});
    $('input#input_text, textarea#textarea1').characterCounter().focus(() =>{$("#jkeyboard").css("display","inherit");} );
    // $('input#input_text, textarea#textarea1').characterCounter().blur(() =>{$("#jkeyboard").css("display","none");} );
    
  $('.tap-target').tapTarget('open');
//    $('.tap-target').tapTarget('close');

$('#jkeyboard')
  .draggable()
  .css("display","none")
  .css("background-color","grey");


$('.layout_switch').html('<i class="material-icons">add</i>');



$('#jkeyboard').jkeyboard({
    layout: "russian",
    input: $('#input_text')
  });
  
});

