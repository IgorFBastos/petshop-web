import Users from "../../models/Users.js";
import express from "express"


const usersRoutes = express.Router();




usersRoutes.get("/list", async (req, res) => {
    const users = await Users.find({});
    res.send(users);
});

usersRoutes.get("/list/:id", async (req, res) => {
    const id = req.params.id
    const user = await Users.findById(id);
    res.send(user);
});



export default usersRoutes;


