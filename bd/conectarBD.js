require('dotenv').config();
class ConectarBD{
    constructor(){
        this.conexion=null;
        this.mysql=require("mysql2/promise");

    }

    async conectarMySql(){
       try{
           this.conexion=await this.mysql.createConnection({
                host:process.env.HOSTMYSQL || "bxyisrkaelftzwityylg-mysql.services.clever-cloud.com",
                user:process.env.USERMYSQL || "uolgvi5w7kx5umee",
                password:process.env.PASSWORDMYSQL || "RDxwIAwHMiz8iThNXxBT",
                database:process.env.DATABASEMYSQL || "bxyisrkaelftzwityylg",
                port:process.env.PORTMYSQL || 3306


                
            });
            console.log("Conectado a MySql");
            
       } catch (error){
            console.error("Error al conectar con MySql "+error);
       }
    }
    async cerrarConexion(){
        
            try{
                await this.conexion.end();
                console.log("Conexion cerrada con mysql")
            }catch (error){
                    console.log("error al deconectar con mysql "+error)
            }
        
    }
}
module.exports=ConectarBD;