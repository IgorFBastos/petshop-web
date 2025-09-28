import express  from "express"
import hoursRoutes from "./hoursRoutes/hoursRoutes.js";
import usersRoutes from "./usersRoutes/usersRoutes.js";
import schedulingRoutes from "./schedulingRoutes.js/schedulingRoutes.js";



const globalRouter = express.Router();



globalRouter.use("/hours", hoursRoutes);
globalRouter.use("/users", usersRoutes);
globalRouter.use("/scheduling", schedulingRoutes);




export default globalRouter;

