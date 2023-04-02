$(document).ready(function(){
   
    
    $('form').validate({
        rules:{
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone:{
                required:true
            }
           
        }
    })
    
    $('#telefone').mask('(00)00000-0000' , {
        placeholder:'(  ) _____-____ '
    })

    




})