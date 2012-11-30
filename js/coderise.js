(function() {
   StackMob.init({
    appName: "ipa",
    clientSubdomain: "anamariasosamgmailcom",
    publicKey: "37aac843-30c7-4e1a-b017-2e46d2caee61",
    apiVersion: 0
    });
    
})();

$(document).ready(function(){
    var Form = StackMob.Model.extend({ schemaName: 'form' });
$('#Enviar').click(function(e) {
   e.preventDefault();
    
    var estudiante = $('#estudiante').val();
    var grado = $('#grado').val();
    var asignatura = $('#asignatura').val();
    var nota = $('#nota').val();

    
    var entry = new Form ({estudiante:estudiante, grado:grado, asignatura:asignatura, nota:nota});
    entry.create();
    console.log("Nota enviada");
    alert('La nota ha sido enviada');
});

$('#enviarcontacto').click(function(e) {
   e.preventDefault();
    
   var nombre = $('#nombre').val();
    var correo = $('#correo').val();
    var mensaje = $('#mensaje').val();
    
    var Contact = StackMob.Model.extend({ schemaName: 'contact' });
    var entryy = new Contact ({nombre:nombre, correo:correo, mensaje:mensaje});
    entryy.create();
    console.log("Mensaje enviado");
    alert('El mensaje ha sido enviado');
});

 $('#notas').click(function(e) {
      e.preventDefault();
      
    var coderisers = new Form();
    var q = new StackMob.Collection.Query();
    var selected = $('#Estudiante').val();
    
    q.equals('estudiante', selected);
    
    coderisers.query(q,{
        success: function(model) {
          var coderisers = model.toJSON();
          var container = $('#coderisers');
          container.empty();
          $.each(coderisers, function(ix, Form) {
              console.log(Form);
              container.append('<p>'+ Form.asignatura +' Su nota es: ' + Form.nota + '</p>');
          });
        },
        error: function(mode, response) {
            console.log(response);
        }
    });

  });
   
});