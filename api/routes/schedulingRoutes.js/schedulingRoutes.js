import express from "express"
import Scheduling from "../../models/Scheduling.js";

const schedulingRoutes = express.Router();


schedulingRoutes.get("/list", async (req, res) => {
    const schedulingList = await Scheduling.find({}).populate('client').populate('hour'); 
    res.send(schedulingList);
});


schedulingRoutes.post("/", async (req, res) => {
    try {
        const body = req.body;
        const newScheduling = await Scheduling.insertOne(body);
        res.status(201).send(newScheduling);
    } catch (error) {
        res.status(400).send({ message: "Erro ao criar agendamento", error });
    }
});




export default schedulingRoutes;