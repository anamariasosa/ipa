(function() {
StackMob.init({
appName: "ipa",
clientSubdomain: "anamariasosamgmailcom",
publicKey: "2a52beae-b7a3-41af-958f-741b00b944f9",
apiVersion: 0
});
})();
$(document).ready(function(){
$('#enviar').click(function(e) {
e.preventDefault();

var nombre = $('#nombre').val();
var telefono = $('#telefono').val();
var pais = $('#pais').val();
var correo = $('#correo').val();
var mensaje = $('#mensaje').val();
var Contacto = StackMob.Model.extend({ schemaName: 'contacto' });
var entry = new Contacto({ nombre: nombre, telefono: telefono, pais: pais, correo: correo, mensaje:mensaje });
entry.create();
alert("Gracias");
});
});