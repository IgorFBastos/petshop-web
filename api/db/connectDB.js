import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {

    const db_url = process.env.URL_MONGODB;
    const db_name = process.env.NAME_DB;
    
    try {
        await mongoose.connect(db_url, {
            dbName: db_name
        });
        
        console.log("Conectado ao MongoDB com sucesso!");

    } catch (error) {
        console.error("Erro ao se conectar com o banco de dados, derrubando servidor.");
        process.exit(1);
    }
}


export default connectDB;