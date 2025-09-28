import mongoose from "mongoose";
import connectDB from "./connectDB.js";
import Hour from "../models/Hours.js";
import Users from "../models/Users.js";
import Scheduling from "../models/Scheduling.js";

const hours = [
    { weekday: "1", hour: "08:00", limit: 3 },
    { weekday: "1", hour: "09:00", limit: 3 },
    { weekday: "1", hour: "10:00", limit: 3 },
    { weekday: "1", hour: "11:00", limit: 3 },
    { weekday: "1", hour: "14:00", limit: 3 },
    { weekday: "1", hour: "15:00", limit: 3 },
    { weekday: "1", hour: "16:00", limit: 3 },
    { weekday: "1", hour: "17:00", limit: 3 },

    { weekday: "2", hour: "08:00", limit: 3 },
    { weekday: "2", hour: "09:00", limit: 3 },
    { weekday: "2", hour: "10:00", limit: 3 },
    { weekday: "2", hour: "11:00", limit: 3 },
    { weekday: "2", hour: "14:00", limit: 3 },
    { weekday: "2", hour: "15:00", limit: 3 },
    { weekday: "2", hour: "16:00", limit: 3 },
    { weekday: "2", hour: "17:00", limit: 3 },

    { weekday: "3", hour: "08:00", limit: 3 },
    { weekday: "3", hour: "09:00", limit: 3 },
    { weekday: "3", hour: "10:00", limit: 3 },
    { weekday: "3", hour: "11:00", limit: 3 },
    { weekday: "3", hour: "14:00", limit: 3 },
    { weekday: "3", hour: "15:00", limit: 3 },
    { weekday: "3", hour: "16:00", limit: 3 },
    { weekday: "3", hour: "17:00", limit: 3 },

    { weekday: "4", hour: "08:00", limit: 3 },
    { weekday: "4", hour: "09:00", limit: 3 },
    { weekday: "4", hour: "10:00", limit: 3 },
    { weekday: "4", hour: "11:00", limit: 3 },
    { weekday: "4", hour: "14:00", limit: 3 },
    { weekday: "4", hour: "15:00", limit: 3 },
    { weekday: "4", hour: "16:00", limit: 3 },
    { weekday: "4", hour: "17:00", limit: 3 },

    { weekday: "5", hour: "08:00", limit: 3 },
    { weekday: "5", hour: "09:00", limit: 3 },
    { weekday: "5", hour: "10:00", limit: 3 },
    { weekday: "5", hour: "11:00", limit: 3 },
    { weekday: "5", hour: "14:00", limit: 3 },
    { weekday: "5", hour: "15:00", limit: 3 },
    { weekday: "5", hour: "16:00", limit: 3 },
    { weekday: "5", hour: "17:00", limit: 3 },

    { weekday: "6", hour: "08:00", limit: 3 },
    { weekday: "6", hour: "09:00", limit: 3 },
    { weekday: "6", hour: "10:00", limit: 3 },
    { weekday: "6", hour: "11:00", limit: 3 },
    { weekday: "6", hour: "14:00", limit: 3 },
    { weekday: "6", hour: "15:00", limit: 3 },
    { weekday: "6", hour: "16:00", limit: 3 },
    { weekday: "6", hour: "17:00", limit: 3 },
];

const users = [
    {name: "Admin", email: "adminUser@gmail.com", type: "admin"},
    {name: "Cliente 1", email:"clientUser1@gmail.com", type: "client"},
    {name: "Cliente 2", email:"clientUser2@gmail.com", type: "client"},
    {name: "Cliente 3", email:"clientUser3@gmail.com", type: "client"},
    {name: "Cliente 4", email:"clientUser4@gmail.com", type: "client"},
    {name: "Cliente 5", email:"clientUser5@gmail.com", type: "client"},
    {name: "Empregado 1", email:"employeeUser1@gmail.com", type: "employee"},
    {name: "Empregado 2", email:"employeeUser2@gmail.com", type: "employee"},
];





const insertHours = async () => {

    try {
        await connectDB();
        await Hour.deleteMany({});
        await Hour.insertMany(hours);

        await Users.deleteMany({});
        await Users.insertMany(users);

        await Scheduling.deleteMany({});
        
        console.log("Dados da seed inseridos com sucesso!");
        mongoose.connection.close();
    } catch (error) {
        console.error("Erro ao inserir os dados da seed:", error);
    }

}


insertHours();
