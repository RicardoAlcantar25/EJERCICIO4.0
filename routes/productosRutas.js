const ruta=require("express").Router();
const ProductoClase=require("../clases/ProductoClase");
const ProductosBD=require("../bd/ProductosBD");

ruta.get("/productos", async(req, res)=>{
    const productosbd = new ProductosBD();
    const productosMySql = await productosbd.mostrarProductos();
    var productosCorrectos=[];
    productosMySql.forEach(producto => {
        var producto1=new ProductoClase(producto);
        if(producto1.nombre!=undefined && producto1.descripcion!=undefined && producto1.precio!=undefined){
            productosCorrectos.push(producto);
        }
    });
    //console.log(usuariosCorrectos);
    res.render("mostrarProductos", {productosCorrectos});
});


ruta.post("/agregarProducto", (req, res)=>{
    var producto1=new ProductoClase(req.body);
    if(producto1.nombre!=undefined && producto1.descripcion!=undefined && producto1.precio!=undefined){
        const productosbd=new ProductosBD();
        productosbd.nuevoProducto(producto1.mostrarDatos);
        //console.log(usuario1.mostrarDatos);
        res.render("inicio", producto1.mostrarDatos);
    }
    else {
        res.render("error")
    }
    
});

ruta.get("/agregarProducto", (req, res)=>{
    res.render("formularioProductos");
});

ruta.get("/editarProducto/:idproducto", async (req, res)=>{
    try {
        const productosbd= new ProductosBD();
        const producto=await productosbd.productoId(req.params.idproducto);
        // console.log(usuario);
        res.render("editarProducto", producto);
    } catch (error) {
        
    }
        res.end();   
});

ruta.post("/editarProducto", async(req, res)=>{
    try {
        const productosbd=new ProductosBD();
        await productosbd.editarProducto(req.body);
        console.log("Usuario editado correctamente");
        res.redirect("/");
    } catch (error) {
        console.log("Error al editar el usuario");
    }
});

ruta.get("/borrarProducto/:id", async(req,res)=>{
    try {
        const productosbd=new ProductosBD();
        await productosbd.borrarProducto(req.params.id);
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
});

module.exports=ruta;