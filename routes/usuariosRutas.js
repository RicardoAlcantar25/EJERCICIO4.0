const ruta=require("express").Router();
const UsuarioClase=require("../clases/UsuarioClase");
const UsuarioBD=require("../bd/UsuariosBD");
const Usuario = require("../clases/UsuarioClase");

ruta.get("/",async (req,res)=>{
    //var usuario1= new UsuarioClase();
    const usuariobd= new UsuarioBD();
    const usuariosMySql=await usuariobd.mostrarUsuarios();
    var usuariosCorrectos=[];
    usuariosMySql.forEach(usuario => {
        var usuario1 = new UsuarioClase(usuario);
        if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
        usuariosCorrectos.push(usuario);
        }
    });
    console.log(usuariosCorrectos);
    res.render("mostrarUsuarios", {usuariosCorrectos}  );
    
});


ruta.post("/agregarUsuario",(req,res)=>{
    var usuario1=new UsuarioClase(req.body);
    console.log(usuario1.mostrarDatos);
    if(usuario1.nombre!=undefined && usuario1.celular!=undefined && usuario1.correo!=undefined){
        const usuariobd = new UsuarioBD();
       usuariobd.nuevoUsuario(usuario1.mostrarDatos);
        //console.log(usuario1.mostrarDatos);
        res.render("inicio",usuario1.mostrarDatos);
    }else{
        res.render("error");


    }
    
});

ruta.get("/agregarUsuario",(req,res)=>{
    res.render("formulario");
});

ruta.get("/editarUsuario/:idUsuarios",async(req,res)=>{
    try {
        const usuariobd = new UsuarioBD();
        const usuario1= await usuariobd.usuarioId(req.params.idUsuarios);
        console.log(usuario1);
        res.render("editarUsuario", usuario1);
    } catch (error) {
        
    }
    
    res.end();
//res.render("editarUsuario");
});


ruta.post("/editarUsuario",async(req,res)=>{
    try {
        const usuariobd = new UsuarioBD();
       // console.log(req.body);
        await usuariobd.editarUsuario(req.body);
        console.log("Usuario editado correctamente");
        res.redirect("/");
    } catch (error) {
        console.log("Error al eidtar");
    }
});

ruta.get("/borrarUsuario/:id",async(req,res)=>{
    try {
        const usuariobd= new UsuarioBD();
        await usuariobd.borrarUsuario(req.params.id);
        res.redirect("/");
    } catch (error) {
        
    }
    });
    
module.exports=ruta;