const ConectarBD=require("./conectarBD");

class UsuarioBD extends ConectarBD{
    constructor(){
        super();
    }
   async nuevoUsuario(usuario){
    const sql="INSERT INTO usuarios values(null,'"+usuario.nombre+"','"+usuario.celular+"','"+usuario.correo+"');";
      try{
        await this.conectarMySql();
        this.conexion.execute(sql);
        console.log("Crea Nuevo Usuario");
        await this.cerrarConexion();
      }catch(error){
        console.error("ERROR AL AGREGAR USUARIO" +Error);
      }
    }
    async  mostrarUsuarios() {
      const sql="SELECT * FROM usuarios;";
      try{
        await this.conectarMySql();
        const [usuariosMySql]=await this.conexion.execute(sql);
        await this.cerrarConexion();
        console.log("Los datos se optuvieron correctamente");
        return(usuariosMySql);
       }catch(error){
        console.error("error al obtener los usuarios"+error);
        console.error(sql);
    }
}
async usuarioId (id) {
  const sql="SELECT * FROM usuarios WHERE idusuarios ="+id+";";
  try {
    await this.conectarMySql();
    const [[usuario]]=await this.conexion.execute(sql);
    await this.cerrarConexion();
    console.log("Cosulta correcta por id");
    return usuario;

  } catch (error) {
    console.error("Error al consultar por id "+error);
    console.error(sql);
    
  }
}
async editarUsuario(usuario){
  // const sql="UPDATE usuarios SET nombre='"+usuario.nombre+"', celular='"+usuario.celular+"', correo='"+usuario.correo+"'WHERE id_usuarios='"+usuario.idusuarios+"';";
  const sql2=`UPDATE usuarios SET 
  nombre='${usuario.nombre}',
  celular='${usuario.celular}',
  correo='${usuario.correo}'
  WHERE id_usuarios = ${usuario.idusuario};`;
  try {
      await this.conectarMySql();
      await this.conexion.execute(sql2);
      await this.cerrarConexion();
      console.log("Actuzalizacion correcta de usuario");
  } catch (error) {
      console.error("Error al editar usuario"+error);
      console.error(sql2);
  }
}
async borrarUsuario(idusuario){
  const sql="DELETE FROM usuarios WHERE id_usuarios="+idusuario;
  try {
      await this.conectarMySql();
      await this.conexion.execute(sql);
      await this.cerrarConexion();
      console.log("Usuario borrado")
  } catch (error) {
      console.error("Error al borrar el usuario"+error);
      console.log(sql);
  }
}

}
module.exports=UsuarioBD;