$(document).ready(function(){
    
    // OCULTAR EL BLOQUE
    $("ul").hide();
    
    $("i").click(function(){ // FUNCIONA ANONIMA. Se usa en esta porcion de código. Atada a este evento.
        $("ul").slideToggle();
        console.log("Yeah!");
    }); 
    
    $(".link").append(" <i class='fa fa-check'></i>"); // te posiciona algo detras del elemeneto. PREPEND es para que te lo ponga antes.

});