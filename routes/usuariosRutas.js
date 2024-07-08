const ruta=require("express").Router();
const UsuarioClase=require("../clases/UsuarioClase");
const UsuariosBD=require("../bd/UsuariosBD");

// Mostrar usuarios
ruta.get('/', async (req, res) => {
    const usuariosbd = new UsuariosBD();
    const usuariosMySql = await usuariosbd.mostrarUsuarios();
    const usuariosCorrectos = usuariosMySql.filter(usuario => usuario.nombre && usuario.celular && usuario.correo);
    res.render('mostrarUsuarios', { usuariosCorrectos });
});

// Agregar usuario
ruta.post('/agregarUsuario', async (req, res) => {
    const usuario1 = new UsuarioClase(req.body);
    if (usuario1.nombre && usuario1.celular && usuario1.correo) {
        const usuariosbd = new UsuariosBD();
        await usuariosbd.nuevoUsuario(usuario1.mostrarDatos);
        res.redirect('/');
    } else {
        res.render('error');
    }
});

ruta.get('/agregarUsuario', (req, res) => {
    res.render('formulario');
});

// Editar usuario
ruta.get('/editarUsuario/:id_usuarios', async (req, res) => {
    try {
        const usuariosbd = new UsuariosBD();
        const usuario = await usuariosbd.usuarioId(req.params.id_usuarios);
        res.render('editarUsuario', { usuario });
    } catch (error) {
        console.error("Error al obtener usuario para editar: ", error);
        res.render('error');
    }
});

ruta.post('/editarUsuario', async (req, res) => {
    try {
        const usuariosbd = new UsuariosBD();
        await usuariosbd.editarUsuario(req.body);
        res.redirect('/');
    } catch (error) {
        console.error('Error al editar el usuario: ', error);
        res.render('error');
    }
});

// Borrar usuario
ruta.get('/borrarUsuario/:id', async (req, res) => {
    try {
        const usuariosbd = new UsuariosBD();
        await usuariosbd.borrarUsuario(req.params.id);
        res.redirect('/');
    } catch (error) {
        console.error('Error al borrar el usuario: ', error);
        res.render('error');
    }
});
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
        res.render("inicioProductos", producto1.mostrarDatos);
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
        console.log("Producto editado correctamente");
        res.redirect("/productos");
    } catch (error) {
        console.log("Error al editar el producto");
    }
});

ruta.get("/borrarProducto/:id", async(req,res)=>{
    try {
        const productosbd=new ProductosBD();
        await productosbd.borrarProducto(req.params.id);
        res.redirect("/productos");
    } catch (error) {
        console.log(error);
    }
});

module.exports=ruta;