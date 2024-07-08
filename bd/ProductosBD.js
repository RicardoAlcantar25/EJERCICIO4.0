const ConectarBD=require("./ConectarBD");

class ProductosBD extends ConectarBD{
    constructor(){
        super();
    }
    async nuevoProducto(producto){
        const sql="INSERT INTO producto values(null,'"+producto.nombre+"','"+producto.descripcion+"','"+producto.precio+"');";
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            console.log("Crear nuevo producto");
            await this.cerrarConexion();
        } catch (error) {
            console.error("Error al agregar producto "+error);
            console.error(sql);
        }
    }

    async mostrarProductos() {
        const sql="SELECT * FROM producto;";
        try {
            await this.conectarMySql();
            const [productosMySql] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Los datos se obtuvieron correctamente");
            return (productosMySql);
        } catch (error) {
            console.error("Error al obtener los datos "+error);
            console.error(sql);
        }
    }

    async productoId(idP){
        const sql="SELECT * FROM producto WHERE idproducto="+idP+";";
        try {
            await this.conectarMySql();
            const [[producto]] = await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Conexion correcta por id");
            return producto;
        } catch (error) {
            console.error("Error al consultar por id"+error);
            console.error(sql);
        }
    }

    async editarProducto(producto){
        const sql="UPDATE producto SET nombre='"+producto.nombre+"', descripcion'"+producto.descripcion+"', precio='"+producto.precio+"';";
        const sql2=`UPDATE producto SET 
        nombre='${producto.nombre}',
        descripcion='${producto.descripcion}',
        precio='${producto.precio}'
        WHERE idproducto = ${producto.idproducto};`; // 2 formas diferentes //
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql2);
            await this.cerrarConexion();
            console.log("Actualizacion Correcta de producto");
            ///console.error(sql2);
        } catch (error) {
            console.error("Error al editar producto"+error);
            console.error(sql2);
        }
        //res.end();
    }

    async borrarProducto(idproducto){
        const sql="DELETE FROM producto WHERE idproducto="+idproducto;
        try {
            await this.conectarMySql();
            await this.conexion.execute(sql);
            await this.cerrarConexion();
            console.log("Producto borrado correctamente");
        } catch (error) {
            console.error("Error al borrar el producto"+error);
            console.log(sql);
        }
    }

}


module.exports=ProductosBD;