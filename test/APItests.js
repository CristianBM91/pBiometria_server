// ........................................................
// APItests.js
// ........................................................
var request = require ('request')
var assert = require ('assert')
// ........................................................
// ........................................................
const IP_PUERTO="http://localhost:1234"
// ........................................................
// main ()
// ........................................................
describe( "Test 2 : Recuerda arrancar el servidor", function() {
// ....................................................
// ....................................................
it( "probar que GET /prueba responde ¡Funciona bien!", function( hecho ) {
request.get(
{ url : IP_PUERTO+"/prueba", headers : { 'User-Agent' : 'cristian' }},
function( err, respuesta, carga ) {
assert.equal( err, null, "¿ha habido un error?" )
assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
assert.equal( carga, "¡Funciona bien!", "¿La carga no es ¡Funciona!?" )
hecho()
} // callback()
) // .get
}) // it
// ....................................................
// ....................................................
it( "probar POST /insertarMedicion", function( hecho ) {
    medicion = {ozono: 500, temperatura: 20, geopunto: {lat: 40.416775, lon: -3.703790}}
request.post(
{ url : IP_PUERTO+"/insertarMedicion",
headers : { 'User-Agent' : 'cristian', 'Content-Type' : 'application/json' },
body : JSON.stringify( medicion )
},
function( err, respuesta, carga ) { 
assert.equal( err, null, "¿ha habido un error?" )
assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
assert.equal( carga, "El valor proporcionado es [object Object]", "¿La carga no es un json?" )
hecho()
} // callback
) // .post
}) // it
// ....................................................
// ....................................................
it( "probar GET /medicion", function( hecho ) {
request.get(
{ url : IP_PUERTO+"/medicion",
headers : { 'User-Agent' : 'cristian' }},
function( err, respuesta, carga ) {
assert.equal( err, null, "¿ha habido un error?" )
assert.equal( respuesta.statusCode, 200, "¿El código no es 200 (OK)" )
var solucion = JSON.parse( carga )
assert.equal( solucion[0].valorOzono, 500, "¿ No es 500 ?" )
hecho()
} // callback
) // .get
}) // it


}) // describe
