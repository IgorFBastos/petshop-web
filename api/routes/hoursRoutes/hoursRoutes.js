import express from "express"
import Hour from "../../models/Hours.js";


const hoursRoutes = express.Router();



hoursRoutes.get("/list", async (req, res) => {
    const hoursList = await Hour.find({});
    res.send(hoursList);
});

hoursRoutes.get("/list/:id", async (req, res) => {
    const id = req.params.id
    const response = await Hour.findById(id);
    res.send(response);
});














export default hoursRoutes;