class Producto{
    constructor(producto1){
        this.idP=producto1.idproducto;
        this.nombre=producto1.nombre;
        this.descripcion=producto1.descripcion;
        this.precio=producto1.precio;
    }

    set id(idP){
        this._idP=idP;
    }

    set nombre(nombre){
        var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
        if(regexNombre.test(nombre)){
            this._nombre=nombre;
        }
    }

    set descripcion(descripcion){
        var regexDescripcion = /^[a-zA-Z0-9\s.,;:()!?&%$#@-]{1,}$/;
        if(regexDescripcion.test(descripcion)){
            this._descripcion=descripcion;
        }
    }

    set precio(precio){
        var regexPrecio = /^\d+(\.\d{1,2})?$/;
        if(regexPrecio.test(precio)){
            this._precio=precio;
        }
    }

    get id(){
        return this._idP;
    }

    get nombre(){
        return this._nombre;
    }

    get descripcion(){
        return this._descripcion;
    }

    get precio(){
        return this._precio;
    }

    get mostrarDatos(){
        return {
            id:this.id,
            nombre:this.nombre,
            precio:this.precio,
            descripcion:this.descripcion
        }
    }
}


module.exports=Producto;