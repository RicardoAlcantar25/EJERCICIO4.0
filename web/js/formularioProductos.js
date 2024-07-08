var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexDescripcion = /^[a-zA-Z0-9\s.,;:()!?&%$#@-]{1,}$/;
var regexPrecio = /^\d+(\.\d{1,2})?$/;

var enviarDatos=0;

var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementsByClassName("mensajeNombre")[0];
var circleCrossNombre=document.getElementsByClassName("circleCrossNombre")[0];
var circleCheckNombre=document.getElementsByClassName("circleCheckNombre") [0];

var descripcion=document.getElementById("descripcion");
var mensajeDescripcion=document.getElementsByClassName("mensajeDescripcion")[0];
var circleCrossDescripcion=document.getElementsByClassName("circleCrossDescripcion")[0];
var circleCheckDescripcion=document.getElementsByClassName("circleCheckDescripcion") [0];

var precio=document.getElementById("precio");
var mensajePrecio=document.getElementsByClassName("mensajePrecio")[0];
var circleCrossPrecio=document.getElementsByClassName("circleCrossPrecio")[0];
var circleCheckPrecio=document.getElementsByClassName("circleCheckPrecio") [0];


nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        enviarDatos++;
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("error");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }
    else{

        mensajeNombre.classList.add("ocultar");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
        nombre.classList.remove("error");
        
    }
});

descripcion.addEventListener("blur", ()=>{
    if (!regexDescripcion.test(descripcion.value)) {
        enviarDatos++;
        mensajeDescripcion.classList.remove("ocultar");
        descripcion.classList.add("error");
        descripcion.classList.add("correcto");
        circleCrossDescripcion.classList.remove("ocultar");
        circleCheckDescripcion.classList.add("ocultar");
    }
    else{
        mensajeDescripcion.classList.add("ocultar");
        descripcion.classList.add("correcto");
        circleCrossDescripcion.classList.add("ocultar");
        circleCheckDescripcion.classList.remove("ocultar");
        descripcion.classList.remove("error");
    }
});

precio.addEventListener("blur", ()=>{
    if (!regexPrecio.test(precio.value)) {
        enviarDatos++;
        mensajePrecio.classList.remove("ocultar");
        precio.classList.add("error");
        precio.classList.add("correcto");
        circleCrossPrecio.classList.remove("ocultar");
        circleCheckPrecio.classList.add("ocultar");
    }
    else{
        mensajePrecio.classList.add("ocultar");
        precio.classList.add("correcto");
        circleCrossPrecio.classList.add("ocultar");
        circleCheckPrecio.classList.remove("ocultar");
        precio.classList.remove("error");
    }
});

var formularioProductos=document.getElementById("formularioProductos");
formularioProductos.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log(enviarDatos);
    if(enviarDatos > 0){
        //enviarDatos=0;
    } 
    else{
        formularioProductos.submit();
    }
});


var formularioProductos=document.getElementById("formularioProductos");

formularioProductos.addEventListener("submit", (e)=>{
    e.preventDefault();
    var avanzar=0;
    if (!regexNombre.test(nombre.value)) {

        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("error");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.remove("ocultar");
        circleCheckNombre.classList.add("ocultar");
    }
    else{

        mensajeNombre.classList.add("ocultar");
        nombre.classList.add("correcto");
        circleCrossNombre.classList.add("ocultar");
        circleCheckNombre.classList.remove("ocultar");
        nombre.classList.remove("error");
        avanzar=1;
        
    }
    if(avanzar=1){
        formularioProductos.submit();
    }
});